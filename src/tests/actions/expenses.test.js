import { addExpense, editExpense, removeExpense } from "../../actions/expenses";

test("", () => {
  const action = removeExpense({ id: "123abc" });
  expect(action).toEqual({
    id: "123abc",
    type: "REMOVE_EXPENSE",
  });
});
