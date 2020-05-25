import database from "../firebase/firebase";

// ADD_EXPENSE
export const addExpense = (expense) => ({
  type: "ADD_EXPENSE",
  expense,
});

//For async action
export const startAddExpense = (expenseData = {}) => {
  return (dispatch) => {
    const {
      description = "",
      note = "",
      amount = 0,
      createdAt = 0,
    } = expenseData;

    const expense = { description, note, amount, createdAt };

    return database
      .ref("expenses")
      .push(expense)
      .then((snapshot) => {
        dispatch(
          addExpense({
            id: snapshot.key,
            ...expense,
          })
        );
      });
  };
};

//REMOVE_EXPENSE
export const removeExpense = ({ id } = {}) => ({
  type: "REMOVE_EXPENSE",
  id,
});

export const startRemoveExpense = ({ id } = {}) => {
  return (dispatch) => {
    return database.ref(`expenses/${id}`).remove().then(() => {
      dispatch(removeExpense({ id }));
    })
  }
}

//EDIT_EXPENSE
export const editExpense = (id, updates) => ({
  type: "EDIT_EXPENSE",
  id,
  updates,
});

//SET_EXPENSES
export const setExpenses = (expenses) => ({
  type: "SET_EXPENSES",
  expenses,
});

export const startSetExpenses = () => {
  return (dispatch) => {
    return database
      .ref("expenses")
      .once("value")
      .then((snapshot) => {
        const fetchExpenses = [];
        snapshot.forEach((childSnapshot) => {
          fetchExpenses.push({
            id: childSnapshot.key,
            ...childSnapshot.val(),
          });
        });
        dispatch(setExpenses(fetchExpenses));
      });
  };
};
