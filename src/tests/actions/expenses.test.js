import { addExpense, editExpense, removeExpense } from "../../actions/expenses";

test("should setup remove expense action object", () => {
  const action = removeExpense({ id: "123abc" });
  expect(action).toEqual({
    id: "123abc",
    type: "REMOVE_EXPENSE",
  });
});

test('should setup edit expense', () => {
  const updates = {
    note: 'New note value'
  };
  const action = editExpense("123abc", updates);

  expect(action).toEqual({
    id: "123abc",
    type: "EDIT_EXPENSE",
    updates
  });
});

test("should setup add expense action object with provided values", () => {
  const expenseData = {
    'description': "Rent",
    amount: 109500,
    createdAt: 1000,
    notes: "rent note"
  }

  const action = addExpense(expenseData);

  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      ...expenseData,
      id: expect.any(String)
    }
  })
})

test("should setup add expense action object with default values", () => {
  const defaultValue = {
    description: "",
    notes: "",
    amount: 0,
    createdAt: 0,
  };

  const action = addExpense();
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      ...defaultValue,
      id: expect.any(String)
    }
  })
})