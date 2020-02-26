import React from 'react';

export default props => {
  return (
    <div className='income-expense-container'>
      <div>
        <h4>Income</h4>
        <p id='money-income' className='money income'>
          $15.00
        </p>
      </div>
      <div>
        <h4>Expense</h4>
        <p id='money-expense' className='money expense'>
          $1.00
        </p>
      </div>
    </div>
  );
};
