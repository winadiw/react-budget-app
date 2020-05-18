import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter,
  Route
} from "react-router-dom";

import 'normalize.css/normalize.css';
import './styles/styles.scss';

const ExpenseDashboardPage = () => (
  <div>
    <p>This is my dashboard component</p>
  </div>
);

const AddExpensePage = () => (
  <div>
    <p>This is my add expense component</p>
  </div>
);

const EditExpensePage = () => (
  <div>
    <p>This is my edit expense component</p>
  </div>
);

const HelpPage = () => (
  <div>
    <p>This is my help page component</p>
  </div>
);

const routes = (
  <BrowserRouter>
    <div>
      <Route path="/" component={ExpenseDashboardPage} exact={true} />
      <Route path="/create" component={AddExpensePage} />
      <Route path="/edit" component={EditExpensePage} />
      <Route path="/help" component={HelpPage} />
    </div>
  </BrowserRouter>
);

ReactDOM.render(
  routes,
  document.getElementById("app")
);
