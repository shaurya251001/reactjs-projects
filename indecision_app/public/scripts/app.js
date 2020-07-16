"use strict";

console.log("App.js is running!");

//JSX JS XML
// var template = <p>This is JSX from app.js</p>;
var app = {
  title: "Indecision App",
  subTitle: "why"
};
var template = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    app.title
  ),
  React.createElement(
    "p",
    null,
    app.subTitle
  )
);
var user = {
  name: "Shaurya",
  age: 18,
  loc: "jablpur"
};
var username = "xyz";
var age = 56;
var loc = "jabalpur";
var templateTwo = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    user.name
  ),
  React.createElement(
    "p",
    null,
    "Age:",
    user.age
  ),
  React.createElement(
    "p",
    null,
    "Loc:",
    user.loc
  )
);
ReactDOM.render(template, document.querySelector(".app"));
