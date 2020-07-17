console.log("App.js is running!");

//JSX JS XML
// var template = <p>This is JSX from app.js</p>;
const app = {
  title: "Indecision App",
  subTitle: "je",
  options: ["One", "Two"],
};
const template = (
  <div>
    <h1>{app.title}</h1>
    {app.subTitle && <p>{app.subTitle}</p>}
    <p>
      {app.options.length > 0 ? "Here are your options" : "No options exist"}
    </p>
  </div>
);
let count = 0;
const addOne = () => {
  console.log("Add");
};
const minusOne = () => {
  console.log("Minus");
};
const resetOne = () => {
  console.log("Reset");
};
const templateTwo = (
  <div>
    <h1>Count:{count}</h1>
    <button onClick={addOne}>+1</button>
    <button onClick={minusOne}>-1</button>
    <button onClick={resetOne}>Reset</button>
  </div>
);
ReactDOM.render(templateTwo, document.querySelector(".app"));
