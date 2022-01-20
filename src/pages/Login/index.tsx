import { useState } from 'react';
import styled from 'styled-components';
import { useLogin } from '../../hooks/useLogin';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { login, isPending, error } = useLogin()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    login(email, password);
  };

  return (
    <LoginContainer onSubmit={handleSubmit} className={'login-form'}>
      <h2>login</h2>
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
      {!isPending && <button className="btn">Login</button>}
      {isPending && <button className='btn'>Loading...</button>}
      {error && <p>{error}</p>}
    </LoginContainer>
  );
}

const LoginContainer = styled.form`
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
