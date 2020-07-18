console.log("Ho ");

const handleClick = () => {
  const button = document.querySelector("button");
  const p = document.querySelector("p");
  if (button.textContent === "Hide Details") {
    p.textContent = "";
    button.textContent = "Show Details";
  } else {
    p.textContent = "This is some random text";
    button.textContent = "Hide Details";
  }
};

const template = (
  <div>
    <h1>Visibility Toggle</h1>
    <button onClick={handleClick}>Show Details</button>
    <p></p>
  </div>
);
ReactDOM.render(template, document.querySelector(".app"));
