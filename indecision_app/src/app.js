console.log("App.js is running!");

//JSX JS XML
// var template = <p>This is JSX from app.js</p>;
const app = {
  title: "Indecision App",
  subTitle: "je",
  options: [],
};
const handleSubmit = (e) => {
  e.preventDefault();
  const opt = e.target.elements.option.value;
  if (opt) {
    app.options.push(opt);
    e.target.elements.option.value = "";
    renderOptions();
  }
};
const handleClick = () => {
  app.options = [];
  renderOptions();
};
const handleDecision = (e) => {
  const decision = Math.floor(Math.random() * app.options.length);
  if (app.options.length) {
    alert(app.options[decision]);
  }
};
// const numbers = [55, 100, 200];
const renderOptions = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subTitle && <p>{app.subTitle}</p>}
      <p>
        {app.options.length > 0 ? "Here are your options" : "No options exist"}
      </p>
      <button
        disabled={app.options.length ? false : true}
        onClick={handleDecision}
      >
        What should i do?
      </button>
      {/* <p>{app.options.length}</p> */}
      <button onClick={handleClick}>Remove All</button>
      {/* {numbers.map((number) => {
        return <p key={number}>Number:{number}</p>;
      })} */}
      <ol>
        {app.options.map((option) => {
          return <li key={option}>{option}</li>;
        })}
      </ol>
      <form onSubmit={handleSubmit}>
        <input type="text" name="option" />
        <button>Add option</button>
      </form>
    </div>
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
