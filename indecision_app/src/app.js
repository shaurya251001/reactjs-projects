console.log("App.js is running!");

//JSX JS XML
// var template = <p>This is JSX from app.js</p>;
var template = (
  <div>
    <h1>Shaurya</h1>
    <p>This is someting</p>
  </div>
);
var templateTwo = (
  <div>
    <h1>Shaurya MARWAH</h1>
    <p>Age:18</p>
    <p>Loc:Jabalpur</p>
  </div>
);
ReactDOM.render(templateTwo, document.querySelector(".app"));
