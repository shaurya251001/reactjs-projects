console.log("App.js is running!");

//JSX JS XML
// var template = <p>This is JSX from app.js</p>;
var template = React.createElement("h1", { id: "someid" }, "Something new");
ReactDOM.render(template, document.querySelector(".app"));
