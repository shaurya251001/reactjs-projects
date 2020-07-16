console.log("App.js is running!");

//JSX JS XML
// var template = <p>This is JSX from app.js</p>;
var app = {
  title: "Indecision App",
  subTitle: "why",
};
var template = (
  <div>
    <h1>{app.title}</h1>
    <p>{app.subTitle}</p>
  </div>
);
var user = {
  name: "Shaurya",
  age: 18,
  loc: "jablpur",
};
var username = "xyz";
var age = 56;
var loc = "jabalpur";
var templateTwo = (
  <div>
    <h1>{user.name}</h1>
    <p>Age:{user.age}</p>
    <p>Loc:{user.loc}</p>
  </div>
);
ReactDOM.render(template, document.querySelector(".app"));
