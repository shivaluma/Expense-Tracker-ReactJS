import React, { useContext } from 'react';
import { GlobalContext } from '../Contexts/GlobalState';

const IncomeExpense = props => {
  const { transaction } = useContext(GlobalContext);
  const amounts = transaction.map(el => el.amount);
  const income = amounts
    .filter(el => el >= 0)
    .reduce((prev, cur) => (prev += cur), 0)
    .toFixed(2);
  const expense =
    amounts.filter(el => el < 0).reduce((prev, cur) => (prev += cur), 0) *
    -(1).toFixed(2);
  return (
    <div className='income-expense-container'>
      <div>
        <h4>Income</h4>
        <p id='money-income' className='money income'>
          ${income}
        </p>
      </div>
      <div>
        <h4>Expense</h4>
        <p id='money-expense' className='money expense'>
          ${expense}
        </p>
      </div>
    </div>
  );
};

export default IncomeExpense;
