import React from "react";
import { connect } from "react-redux";
import numeral from "numeral";
import getExpensesTotal from "../selectors/expenses-total";
import getFilteredExpenses from "../selectors/expenses";

export const ExpensesSummary = ({expenseCount, expensesTotal}) => {
  const expenseWord = expenseCount === 1 ? 'expense' : 'expenses';
  const formattedExpensesTotal = numeral(expensesTotal / 100).format('$0,0.00');

  return (
    <div>
      <h1>Viewing {expenseCount} {expenseWord} totaling {formattedExpensesTotal}</h1>
    </div>
  )
}

const mapStateToProps = (state) => {
  const visibleExpenses = getFilteredExpenses(state.expenses, state.filters);

  return {
    expenseCount: visibleExpenses.length,
    expensesTotal: getExpensesTotal(visibleExpenses)
  }
}

export default connect(mapStateToProps)(ExpensesSummary);