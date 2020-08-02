import React from "React";
import { BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";

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

export default Header;
