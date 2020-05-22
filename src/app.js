import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import AppRouter from "./routers/AppRouter";
import configureStore from "../src/store/configureStore";

import { addExpense } from "../src/actions/expenses";
import getVisibleExpenses from "../src/selectors/expenses";
import "normalize.css/normalize.css";
import "./styles/styles.scss";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";

const store = configureStore();

store.dispatch(
  addExpense({
    description: "Water bill",
    amount: 4500,
  })
);

store.dispatch(
  addExpense({
    description: "Gas bill",
    createdAt: 1000
  })
);

store.dispatch(
  addExpense({
    description: "Rent",
    amount: 109500,
  })
);

const state = store.getState();
console.log(getVisibleExpenses(state.expenses, state.filters));

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);
ReactDOM.render(jsx, document.getElementById("app"));
