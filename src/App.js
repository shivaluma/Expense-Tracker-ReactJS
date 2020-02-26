import React from 'react';
import Header from './Components/Header';
import Balance from './Components/Balance';
import './App.css';
import IncomeExpense from './Components/IncomeExpense';

function App() {
  return (
    <div>
      <Header />
      <div className='container'>
        <Balance />
        <IncomeExpense />
      </div>
    </div>
  );
}

export default App;
