"use strict";

console.log("Ho ");
var visibility = false;
var handleClick = function handleClick() {
  visibility = !visibility;
  render();
};
var render = function render() {
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
      visibility ? "Hide Details" : "Show Details"
    ),
    visibility && React.createElement(
      "p",
      null,
      "Some text to see"
    )
  );
  ReactDOM.render(template, document.querySelector(".app"));
};
render();
