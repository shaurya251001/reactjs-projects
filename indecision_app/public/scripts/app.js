"use strict";

console.log("App.js is running!");

//JSX JS XML
// var template = <p>This is JSX from app.js</p>;
var template = React.createElement(
  "h1",
  null,
  "hi there, this is an indecision app"
);
ReactDOM.render(template, document.querySelector(".app"));
