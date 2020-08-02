import React from "react";
import { BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";
import NotFoundPage from "../components/Notfound";
import SiteHome from "../components/SiteHome";
import Header from "../components/Header";
import PortfolioHome from "../components/PortfolioHome";
import Items from "../components/Items";
import Contact from "../components/Contact";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route component={SiteHome} path="/" exact={true} />

          <Route component={PortfolioHome} path="/portfolio" exact={true} />
          <Route component={Items} path="/portfolio/:item" exact={true} />
          <Route component={Contact} path="/contact" />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;
