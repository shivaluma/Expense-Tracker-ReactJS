import React, { useContext } from 'react';
import { GlobalContext } from '../Contexts/GlobalState';
import { Transaction } from './Transaction';

const TransactionList = params => {
  const { transaction } = useContext(GlobalContext);

  return (
    <>
      <h3>History</h3>
      <ul id='list' className='list'>
        {transaction.map(el => (
          <Transaction key={el.id} transaction={el} />
        ))}
      </ul>
    </>
  );
};

export default TransactionList;
