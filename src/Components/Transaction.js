import React from 'react';

export const Transaction = ({ transaction }) => {
  const isNegative = Number(transaction.amount) < 0;
  return (
    <li className={isNegative ? 'expense' : 'income'}>
      {transaction.text}
      <span>
        {(isNegative ? '-' : '') +
          '$' +
          Math.abs(Number(transaction.amount)).toString()}
      </span>
    </li>
  );
};
