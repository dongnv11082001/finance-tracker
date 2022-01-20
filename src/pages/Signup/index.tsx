import React, { useState } from 'react';
import styled from 'styled-components';
import { useSignup } from '../../hooks/useSignup';

export default function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [displayName, setDisplayName] = useState('');
  const { signup, isPending, error } = useSignup()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    signup(email, password, displayName);
  };

  return (
    <SingupContainer onSubmit={handleSubmit} className={'signup-form'}>
      <h2>sign up</h2>
      <label>
        <span>email:</span>
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </label>
      <label>
        <span>password:</span>
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </label>
      <label>
        <span>display name:</span>
        <input
          type="text"
          onChange={(e) => setDisplayName(e.target.value)}
          value={displayName}
        />
      </label>
      {!isPending && <button className="btn">Sign up</button>}
      {isPending && <button className='btn' disabled>Loading...</button>}
      {error && <p className='error'>{error}</p>}
    </SingupContainer>
  );
}

const SingupContainer = styled.form`
  max-width: 360px;
  margin: 60px auto;
  padding: 20px;

  & label {
    display: block;
    margin: 30px auto;
  }
  & span {
    display: block;
    margin-bottom: 6px;
  }
  & input {
    padding: 8px 6px;
    font-size: 1em;
    color: #777;
    width: 100%;
  }
`;
