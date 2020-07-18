"use strict";

console.log("App.js is running!");

//JSX JS XML
// var template = <p>This is JSX from app.js</p>;
var app = {
  title: "Indecision App",
  subTitle: "je",
  options: ["One", "Two"]
};
var template = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    app.title
  ),
  app.subTitle && React.createElement(
    "p",
    null,
    app.subTitle
  ),
  React.createElement(
    "p",
    null,
    app.options.length > 0 ? "Here are your options" : "No options exist"
  )
);
var count = 0;
var addOne = function addOne() {
  count++;
  renderCounter();
};
var minusOne = function minusOne() {
  count--;
  renderCounter();
};
var resetOne = function resetOne() {
  count = 0;
  renderCounter();
};

var renderCounter = function renderCounter() {
  var templateTwo = React.createElement(
    "div",
    null,
    React.createElement(
      "h1",
      null,
      "Count:",
      count
    ),
    React.createElement(
      "button",
      { onClick: addOne },
      "+1"
    ),
    React.createElement(
      "button",
      { onClick: minusOne },
      "-1"
    ),
    React.createElement(
      "button",
      { onClick: resetOne },
      "Reset"
    )
  );
  ReactDOM.render(templateTwo, document.querySelector(".app"));
};
renderCounter();
