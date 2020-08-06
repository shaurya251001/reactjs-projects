import React from "react";
import { BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <h1>Expensify</h1>
      <NavLink to="/" activeClassName="isactive" exact={true}>
        Dashboard
      </NavLink>
      <NavLink to="/create" activeClassName="isactive">
        Create Expense
      </NavLink>
    </header>
  );
};

export default Header;
