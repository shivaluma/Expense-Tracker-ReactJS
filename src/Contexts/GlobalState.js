import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';
const initialState = {
  transaction: [
    { id: 1, text: 'Buy phone', amount: -400 },
    { id: 2, text: 'Salary', amount: 9000 },
    { id: 3, text: 'Buy flowers', amount: -400 }
  ]
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const deleteTransaction = id => {
    dispatch({ type: 'delete', id: id });
  };

  const addTransaction = (text, amount) => {
    dispatch({ type: 'add', text: text, amount: amount });
  };

  return (
    <GlobalContext.Provider
      value={{ transaction: state.transaction, addTransaction: addTransaction }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
