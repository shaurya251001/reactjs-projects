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
var user = {
  name: "",
  age: 18,
  loc: "jb"
};
var username = "xyz";
var age = 56;
var loc = "jabalpur";
function getLocation(location) {
  if (location) {
    return React.createElement(
      "p",
      null,
      location
    );
  }
}
var templateTwo = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    user.name ? user.name : "Anonymous"
  ),
  user.age && user.age >= 18 && React.createElement(
    "p",
    null,
    "Age:",
    user.age
  ),
  getLocation(user.loc)
) //if{getLocation} turns out undefined nothing is printed to the screen
;
ReactDOM.render(template, document.querySelector(".app"));
