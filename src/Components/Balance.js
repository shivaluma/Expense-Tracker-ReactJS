import React, { useContext } from 'react';
import { GlobalContext } from '../Contexts/GlobalState';

const Balance = params => {
  const { transaction } = useContext(GlobalContext);
  const amounts = transaction.map(trans => trans.amount);
  const sum = amounts.reduce((prev, cur) => prev + cur, 0).toFixed(2);
  return (
    <>
      <h4>Your balance</h4>
      <h1 id='balance'>{(sum < 0 ? '-' : '') + '$' + Math.abs(sum)}</h1>
    </>
  );
};

export default Balance;
