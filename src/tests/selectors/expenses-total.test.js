import getExpensesTotal from "../../selectors/expenses-total";
import expenses from "../fixtures/expenses";

test("should return 0 if no expenses", () => {
  const res = getExpensesTotal([]);

  expect(res).toBe(0);
})

test("should correctly add up a single expense", () => {
  const res = getExpensesTotal([expenses[0]]);
  expect(res).toBe(expenses[0].amount);
})


test("should correctly add up multi expense", () => {
  const res = getExpensesTotal([expenses[0], expenses[1]]);
  expect(res).toBe(expenses[0].amount +  expenses[1].amount);
})