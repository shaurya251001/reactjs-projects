console.log("Ho ");
let visibility = false;
const handleClick = () => {
  visibility = !visibility;
  render();
};
const render = () => {
  const template = (
    <div>
      <h1>Visibility Toggle</h1>
      <button onClick={handleClick}>
        {visibility ? "Hide Details" : "Show Details"}
      </button>
      {visibility && <p>{"Some text to see"}</p>}
    </div>
  );
  ReactDOM.render(template, document.querySelector(".app"));
};
render();
