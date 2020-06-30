import React from "react";
import "./App.css";
import Input from "./components/Input";
import Card from "./components/Card";
import Loader from "./components/Loader";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      input: "",
      data: [],
      isLoading: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.fetchMethod = this.fetchMethod.bind(this);
  }
  handleChange(e) {
    console.log(e.target.value);
    this.setState({
      input: e.target.value,
    });
  }

  fetchMethod(e) {
    this.setState({
      isLoading: true,
    });
    e.preventDefault();
    console.log("hello");
    const APP_ID = "decaff6f";
    const APP_KEY = "23a4322e4bc2db26f6ba1be425ad8d75";
    console.log(this.state.input);
    fetch(
      `https://cors-anywhere.herokuapp.com/https://api.edamam.com/search?q=${this.state.input}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free`
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        this.setState({
          isLoading: false,
        });
        const newA = data.hits.map(function (hit) {
          return (
            <Card
              url={hit.recipe.url}
              img={hit.recipe.image}
              ing={hit.recipe.ingredients}
              title={hit.recipe.label}
            />
          );
        });
        this.setState({
          data: newA,
        });
      });
  }

  render() {
    return (
      <div className="row">
        <Input onchange={this.handleChange} onclick={this.fetchMethod} />
        {console.log(this.state.isLoading)}
        <Loader condition={this.state.isLoading} />

        {this.state.data}
      </div>
    );
  }
}

export default App;
