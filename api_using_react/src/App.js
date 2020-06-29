import React from "react";
import "./App.css";
import Input from "./components/Input";

class App extends React.Component {
  constructor() {
    super();
  }
  // componentDidMount() {
  //   const APP_ID = "decaff6f";
  //   const APP_KEY = "23a4322e4bc2db26f6ba1be425ad8d75";
  //   fetch(
  //     `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free`
  //   )
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((data) => data.hits)
  //     .catch((e) => console.log(e));
  // }
  render() {
    return (
      <div className="row">
        <Input />
      </div>
    );
  }
}

export default App;
