import React from "react";
import AddOption from "./AddOption";
import Header from "./Header";
import Action from "./Action";
import Options from "./Options";
import OptionModal from "./OptionModal";

export default class Indecision extends React.Component {
  state = {
    options: [],
    selectedOption: undefined,
  };
  // constructor(props) {
  //   super(props);
  //   this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
  //   this.state = {
  //     options: [], //props.options is not defined (towards the end of the app in ReactDOM) so it falls back to the default props of options=[],
  //   };
  //   this.handlePick = this.handlePick.bind(this);
  //   this.handleAddOption = this.handleAddOption.bind(this);
  //   this.handleDeleteOption = this.handleDeleteOption.bind(this);
  // }

  //handleDeleteOptions
  handleDeleteOptions = () => {
    this.setState(() => ({ options: [] }));
  };
  handlePick = () => {
    const x = Math.floor(
      Math.random(this.state.options) * this.state.options.length
    );
    this.setState(() => {
      return {
        selectedOption: this.state.options[x],
      };
    });
  };
  handleAddOption = (option) => {
    if (!option) {
      return "Enter a valid item to add";
    } else if (this.state.options.indexOf(option) > -1) {
      return "Option already exists";
    } else if (option) {
      this.setState((prevState) => ({
        options: prevState.options.concat([option]),
      })); //do not change the state value ever, only operations on the state are allowed.
      // this.setState((prevState) => {
      //   return {
      //     options: prevState.options.push(
      //       option.target.elements.addoptions.value.trim()
      //     ),
      //   };
      // });
    }
  };
  handleDeleteOption = (option) => {
    this.setState((prevState) => {
      return {
        options: prevState.options.filter((element) => {
          return element !== option;
        }),
      };
    });
  };
  handleClick = () => {
    this.setState(() => {
      return {
        selectedOption: undefined,
      };
    });
  };
  componentDidMount() {
    try {
      const json = localStorage.getItem("options");

      const options = JSON.parse(json);
      if (options) {
        this.setState(() => {
          return {
            options,
          };
        });
      }
    } catch (e) {
      //do nothing if an error is encountered
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem("options", json);
    }
  }
  componentWillUnmount() {
    console.log("component unmounted");
  }
  render() {
    const subtitle = "Put your life in the hands of a computer";
    return (
      <div>
        <Header subtitle={subtitle} />
        <div className="container">
          <Action
            handlePick={this.handlePick}
            hasOptions={this.state.options.length ? true : false}
          />
          <div className="widget">
            <Options
              options={this.state.options}
              handleDeleteOptions={this.handleDeleteOptions}
              handleDeleteOption={this.handleDeleteOption}
            />
            <AddOption addoption={this.handleAddOption} />
          </div>
        </div>
        <OptionModal
          selectedOption={this.state.selectedOption}
          click={this.handleClick}
        />
      </div>
    );
  }
}
