"use strict";

console.log("App.js is running!");

//JSX JS XML
// var template = <p>This is JSX from app.js</p>;
var app = {
  title: "Indecision App",
  subTitle: "je",
  options: []
};
var handleSubmit = function handleSubmit(e) {
  e.preventDefault();
  var opt = e.target.elements.option.value;
  if (opt) {
    app.options.push(opt);
    e.target.elements.option.value = "";
    renderOptions();
  }
};
var handleClick = function handleClick() {
  app.options = [];
  renderOptions();
};
var handleDecision = function handleDecision(e) {
  var decision = Math.floor(Math.random() * app.options.length);
  if (app.options.length) {
    alert(app.options[decision]);
  }
};
// const numbers = [55, 100, 200];
var renderOptions = function renderOptions() {
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
    ),
    React.createElement(
      "button",
      {
        disabled: app.options.length ? false : true,
        onClick: handleDecision
      },
      "What should i do?"
    ),
    React.createElement(
      "button",
      { onClick: handleClick },
      "Remove All"
    ),
    React.createElement(
      "ol",
      null,
      app.options.map(function (option) {
        return React.createElement(
          "li",
          { key: option },
          option
        );
      })
    ),
    React.createElement(
      "form",
      { onSubmit: handleSubmit },
      React.createElement("input", { type: "text", name: "option" }),
      React.createElement(
        "button",
        null,
        "Add option"
      )
    )
  );
  ReactDOM.render(template, document.querySelector(".app"));
};
renderOptions();

// let count = 0;
// const addOne = () => {
//   count++;
//   renderCounter();
// };
// const minusOne = () => {
//   count--;
//   renderCounter();
// };
// const resetOne = () => {
//   count = 0;
//   renderCounter();
// };

// const renderCounter = () => {
//   const templateTwo = (
//     <div>
//       <h1>Count:{count}</h1>
//       <button onClick={addOne}>+1</button>
//       <button onClick={minusOne}>-1</button>
//       <button onClick={resetOne}>Reset</button>
//     </div>
//   );
//   ReactDOM.render(templateTwo, document.querySelector(".app"));
// };
// renderCounter();
