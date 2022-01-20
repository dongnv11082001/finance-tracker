import React from 'react';
import styled from 'styled-components';
import { useAuthContext } from '../../hooks/useAuthContext';
import { useCollection } from '../../hooks/useCollection';
import TransactionForm from './Transactions';
import TransactionList from './TransactionList';

export default function Home() {
  const { user } = useAuthContext();
  const { documents, error } = useCollection('transactions', [
    'uid',
    '==',
    user.uid,
  ]);

  return (
    <Container className="container">
      <div className="content">
        {error && <p>{error}</p>}
        {documents && <TransactionList transactions={documents} />}
      </div>
      <div className="sidebar">
        <TransactionForm uid={user.uid} />
      </div>
    </Container>
  );
}

const Container = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  max-width: 960px;
  margin: 60px auto;
`;
