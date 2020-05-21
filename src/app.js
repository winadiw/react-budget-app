import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import AppRouter from "./routers/AppRouter";
import configureStore from "../src/store/configureStore";

import { addExpense } from "../src/actions/expenses";
import { setTextFilter } from "../src/actions/filters";
import getVisibleExpenses from "../src/selectors/expenses";
import "normalize.css/normalize.css";
import "./styles/styles.scss";

const store = configureStore();

store.dispatch(
  addExpense({
    description: "Water bill",
    amount: 10000,
  })
);

store.dispatch(
  addExpense({
    description: "Gas bill",
    amount: 2500,
  })
);

store.dispatch(setTextFilter("gas"));

const state = store.getState();
console.log(state);
console.log(getVisibleExpenses(state.expenses, state.filters));

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);
ReactDOM.render(jsx, document.getElementById("app"));
