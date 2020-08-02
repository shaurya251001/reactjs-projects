import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";
import "normalize.css";
import "./styles/styles.scss";
const ExpenseDashboardPage = () => {
  return <div>Dashboard page..</div>;
};
const AddExpensePage = () => {
  return <div>Add expense page..</div>;
};
const EditExpensePage = () => {
  return <div>from edit component</div>;
};
const HelpPage = () => {
  return <div>from help component</div>;
};

const NotFoundPage = () => {
  return (
    <div>
      404-<Link to="/">Go home</Link>
    </div>
  );
};

const Header = () => {
  return (
    <header>
      <h1>Expensify</h1>
      <NavLink to="/" activeClassName="isactive" exact={true}>
        Home
      </NavLink>
      <NavLink to="/create" activeClassName="isactive">
        Create
      </NavLink>
      <NavLink to="/edit" activeClassName="isactive">
        Edit
      </NavLink>
      <NavLink to="/help" activeClassName="isactive">
        Help
      </NavLink>
    </header>
  );
};
const routes = (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={ExpenseDashboardPage} exact={true} />
        <Route path="/create" component={AddExpensePage} />
        <Route path="/edit" component={EditExpensePage} />
        <Route path="/help" component={HelpPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

ReactDOM.render(routes, document.querySelector(".app"));
