export default (state, action) => {
  switch (action.type) {
    case 'delete': {
      console.log(state);
      return state;
    }
    case 'add': {
      const newTransactionList = state.transaction.slice();
      const newId = newTransactionList[newTransactionList.length - 1].id + 1;
      newTransactionList.push({
        id: newId,
        text: action.text,
        amount: Number(action.amount)
      });
      return { transaction: newTransactionList };
    }
    default:
      return state;
  }
};
