import React, { useRef, useContext } from 'react';
import { GlobalContext } from '../Contexts/GlobalState';

const AddTransaction = params => {
  const { addTransaction } = useContext(GlobalContext);
  const textRef = useRef(null);
  const amountRef = useRef(null);
  return (
    <>
      <h3>Add new transaction</h3>
      <form id='form'>
        <div className='form-control'>
          <label htmlFor='text'>Text</label>
          <input
            type='text'
            ref={textRef}
            id='text'
            placeholder='Enter text...'
          />
        </div>
        <div className='form-control'>
          <label htmlFor='amount'>
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            type='number'
            ref={amountRef}
            id='amount'
            placeholder='Enter amount...'
          />
        </div>
        <button
          className='btn'
          onClick={e => {
            e.preventDefault();
            const text = textRef.current.value;
            const amount = Number(amountRef.current.value);
            addTransaction(text, amount);
          }}
        >
          Add transaction
        </button>
      </form>
    </>
  );
};

export default AddTransaction;
