import React from "react";
import ReactDOM from "react-dom";
import "normalize.css";
import AppRouter from "./routers/AppRouter";
import "./styles/styles.scss";

ReactDOM.render(<AppRouter />, document.querySelector(".app"));
