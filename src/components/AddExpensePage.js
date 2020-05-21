import React from "react";
import ExpenseForm from "./ExpenseForm";
import { connect } from "react-redux";
import {addExpense} from "../actions/expenses";

const AddExpensePage = (props) => (
    <div>
        <h1>Add Expense</h1>
        <ExpenseForm 
            onSubmit={(data) => {
                console.log(data);
                props.dispatch(addExpense(data));
                props.history.push('/'); //navigating to home page by react-router
            }}
        />
    </div>
);

export default connect()(AddExpensePage);
