console.log("App.js is running!");

//JSX JS XML
// var template = <p>This is JSX from app.js</p>;
var app = {
  title: "Indecision App",
  subTitle: "je",
  options: ["One", "Two"],
};
var template = (
  <div>
    <h1>{app.title}</h1>
    {app.subTitle && <p>{app.subTitle}</p>}
    <p>
      {app.options.length > 0 ? "Here are your options" : "No options exist"}
    </p>
  </div>
);
var user = {
  name: "",
  age: 18,
  loc: "jb",
};
var username = "xyz";
var age = 56;
var loc = "jabalpur";
function getLocation(location) {
  if (location) {
    return <p>{location}</p>;
  }
}
var templateTwo = (
  <div>
    <h1>{user.name ? user.name : "Anonymous"}</h1>
    {user.age && user.age >= 18 && <p>Age:{user.age}</p>}
    {getLocation(user.loc)}
  </div> //if{getLocation} turns out undefined nothing is printed to the screen
);
ReactDOM.render(template, document.querySelector(".app"));
