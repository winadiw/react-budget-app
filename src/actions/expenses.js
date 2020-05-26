import database from "../firebase/firebase";

// ADD_EXPENSE
export const addExpense = (expense) => ({
  type: "ADD_EXPENSE",
  expense,
});

//For async action
export const startAddExpense = (expenseData = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;

    const {
      description = "",
      note = "",
      amount = 0,
      createdAt = 0,
    } = expenseData;

    const expense = { description, note, amount, createdAt };
    const ref = `users/${uid}/expenses`;

    return database
      .ref(ref)
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
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    const ref = `users/${uid}/expenses/${id}`;

    return database.ref(ref).remove().then(() => {
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

export const startEditExpense = (id, updates) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    const ref = `users/${uid}/expenses/${id}`;

    return database.ref(ref).update(updates).then(() => {
      dispatch(editExpense(id, updates));
    });
  }
}

//SET_EXPENSES
export const setExpenses = (expenses) => ({
  type: "SET_EXPENSES",
  expenses,
});

export const startSetExpenses = () => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    const ref = `users/${uid}/expenses`;

    return database
      .ref(ref)
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
