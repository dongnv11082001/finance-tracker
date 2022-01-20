import { doc } from 'firebase/firestore';
import React from 'react';
import styled from 'styled-components';
import { projectFirestore } from '../../../firebase/config';
import { useFirestore } from '../../../hooks/useFirestore';

export default function TransactionList({
  transactions,
}: {
  transactions: any;
}) {
  const { deleteDocument } = useFirestore('transactions')

  const handleClick = async (id: string) => {
    const ref = doc(projectFirestore, 'transactions', id)
    await deleteDocument(ref);
  }

  return (
    <ul>
      {transactions.map((transaction: any) => (
        <Item key={transaction.id}>
          <Name className="name">{transaction.name}</Name>
          <Amount className="transactions amount">${transaction.amount}</Amount>
          <Button onClick={() => handleClick(transaction.id)}>X</Button>
        </Item>
      ))}
    </ul>
  );
}

const Item = styled.li`
  margin: 30px auto;
  border: 1px solid #f2f2f2;
  box-shadow: 3px 3px 5px rgba(50, 50, 50, 0.1);
  padding: 20px;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  border-left: 4px solid #1f9751;
`;

const Name = styled.p`
  color: #777;
  font-size: 1.4em;
`;

const Amount = styled.p`
  margin-left: auto;
  margin-right: 40px;
  color: #777;
  font-weight: bold;
  font-size: 1.6em;
`;

const Button = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  background: #ddd;
  color: #777;
  border: none;
  padding: 12px 8px;
  text-align: center;
  line-height: 0;
  font-size: 0.9em;
  cursor: pointer;
`;
