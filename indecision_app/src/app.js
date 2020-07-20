// const obj = {
//   name: "xyz",
//   getName() {
//     return this.name;
//   },
// };
// // const getName = obj.getName; //the context in which this is defined now gets set to the getName (anon. function) func we defined and func has undefined as their this binding so the error;
// // const getName = obj.getName.bind(obj); //the context is again changed to obj now for this again this.name="xyz";
// const getName = obj.getName.bind({ name: "Shaurya" }); //bind to whatever obj you want..;
// console.log(getName());
class Indecision extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.state = {
      options: [],
    };
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
  }
  //handleDeleteOptions
  handleDeleteOptions() {
    this.setState(() => {
      return {
        options: [],
      };
    });
  }
  handlePick() {
    const x = Math.floor(
      Math.random(this.state.options) * this.state.options.length
    );
    alert(this.state.options[x]);
  }
  handleAddOption(option) {
    option.preventDefault();
    const text = option.target.elements.addoptions.value.trim();
    if (!text) {
      alert("Enter a valid item to add");
    } else if (this.state.options.indexOf(text) > -1) {
      alert("Option already exists");
    } else if (text) {
      this.setState((prevState) => {
        return {
          options: prevState.options.concat([text]),
        }; //do not change the state value ever, only operations on the state are allowed.
      });
      // this.setState((prevState) => {
      //   return {
      //     options: prevState.options.push(
      //       option.target.elements.addoptions.value.trim()
      //     ),
      //   };
      // });
    }
    option.target.elements.addoptions.value = "";
  }
  render() {
    const title = "Indecision App";
    const subtitle = "Put your life in the hands of a computer";
    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <Action
          handlePick={this.handlePick}
          hasOptions={this.state.options.length ? true : false}
        />
        <Options
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
        />
        <AddOption addoption={this.handleAddOption} />
      </div>
    );
  }
}
class Header extends React.Component {
  render() {
    //Render is imp for es6 normally the class properties are not mandatory but here the render method is mandatory
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
      </div>
    );
  }
}
class Action extends React.Component {
  // handlePick() {
  //   alert("Hello");
  // }
  render() {
    return (
      <div>
        <button
          onClick={this.props.handlePick}
          disabled={!this.props.hasOptions}
        >
          What should I do?
        </button>
      </div>
    );
  }
}
class Option extends React.Component {
  render() {
    return <div>{this.props.text}</div>;
  }
}
class Options extends React.Component {
  // constructor(props) {
  //   super(props); //this.props is now defined
  //   this.handleRemoveAll = this.handleRemoveAll.bind(this); //the constructor and render are not event handlers and hence have the correct this binding
  // }

  render() {
    return (
      <div>
        <h1>Options go here!</h1>
        <button onClick={this.props.handleDeleteOptions}>Remove All</button>
        <div>
          {this.props.options.length}
          {this.props.options.map((element) => {
            return <Option text={element} key={element} />;
          })}
        </div>
      </div>
    );
  }
}
class AddOption extends React.Component {
  // handleAddOption(e) {
  //   e.preventDefault();
  //   if (e.target.elements.addoptions.value.trim()) {
  //     alert("helllo");
  //   }
  //   e.target.elements.addoptions.value = "";
  // }
  render() {
    return (
      <div>
        <form onSubmit={this.props.addoption}>
          <input placeholder="Option" name="addoptions" type="text" />
          <button>Add Option</button>
        </form>
      </div>
    );
  }
}

// const jsx = (
//   <div>
//     <Header />

//     {/* <Header />Uppercase is required here(not optional) */}
//   </div>
// );
ReactDOM.render(<Indecision />, document.querySelector(".app"));
