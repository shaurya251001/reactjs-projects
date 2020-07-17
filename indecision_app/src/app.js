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
const user = {
  name: "",
  age: 18,
  loc: "jb",
};
const username = "xyz";
const age = 56;
const loc = "jabalpur";
function getLocation(location) {
  if (location) {
    return <p>{location}</p>;
  }
}
const templateTwo = (
  <div>
    <h1>{user.name ? user.name : "Anonymous"}</h1>
    {user.age && user.age >= 18 && <p>Age:{user.age}</p>}
    {getLocation(user.loc)}
  </div> //if{getLocation} turns out undefined nothing is printed to the screen
);
ReactDOM.render(template, document.querySelector(".app"));
