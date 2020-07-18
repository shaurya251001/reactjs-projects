"use strict";

console.log("Ho ");

var handleClick = function handleClick() {
  var button = document.querySelector("button");
  var p = document.querySelector("p");
  if (button.textContent === "Hide Details") {
    p.textContent = "";
    button.textContent = "Show Details";
  } else {
    p.textContent = "This is some random text";
    button.textContent = "Hide Details";
  }
};

var template = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    "Visibility Toggle"
  ),
  React.createElement(
    "button",
    { onClick: handleClick },
    "Show Details"
  ),
  React.createElement("p", null)
);
ReactDOM.render(template, document.querySelector(".app"));
