"use strict";

console.log("App.js is running!");

//JSX JS XML
// var template = <p>This is JSX from app.js</p>;
var template = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    "Shaurya"
  ),
  React.createElement(
    "p",
    null,
    "This is someting"
  )
);
var templateTwo = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    "Shaurya MARWAH"
  ),
  React.createElement(
    "p",
    null,
    "Age:18"
  ),
  React.createElement(
    "p",
    null,
    "Loc:Jabalpur"
  )
);
ReactDOM.render(templateTwo, document.querySelector(".app"));
