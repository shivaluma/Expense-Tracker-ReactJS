import React from 'react';

export const Transaction = ({ transaction }) => {
  const isNegative = Number(transaction.amount) < 0;
  return (
    <li key={transaction.key} className={isNegative ? 'income' : 'expense'}>
      {transaction.text}
      <span>
        {(isNegative ? '-' : '') +
          '$' +
          Math.abs(Number(transaction.amount)).toString()}
      </span>
    </li>
  );
};
