import React from "react";
import { NavLink, Switch } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <h1>Portfolio</h1>

      <NavLink activeClassName="isactive" to="/" exact={true}>
        Home
      </NavLink>
      <NavLink activeClassName="isactive" to="/portfolio">
        Portfolio
      </NavLink>
      <NavLink activeClassName="isactive" to="/contact">
        Contact
      </NavLink>
    </header>
  );
};

export default Header;
