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
      options: [], //props.options is not defined (towards the end of the app in ReactDOM) so it falls back to the default props of options=[],
    };
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
  }
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
  //handleDeleteOptions
  handleDeleteOptions() {
    this.setState(() => ({ options: [] }));
  }
  handlePick() {
    const x = Math.floor(
      Math.random(this.state.options) * this.state.options.length
    );
    alert(this.state.options[x]);
  }
  handleAddOption(option) {
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
  }
  handleDeleteOption(option) {
    this.setState((prevState) => {
      return {
        options: prevState.options.filter((element) => {
          return element !== option;
        }),
      };
    });
  }
  render() {
    const subtitle = "Put your life in the hands of a computer";
    return (
      <div>
        <Header subtitle={subtitle} />
        <Action
          handlePick={this.handlePick}
          hasOptions={this.state.options.length ? true : false}
        />
        <Options
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
          handleDeleteOption={this.handleDeleteOption}
        />
        <AddOption addoption={this.handleAddOption} />
      </div>
    );
  }
}
// Indecision.defaultProps = {
//   options: [],
// };
const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      {props.subtitle && <h2>{props.subtitle}</h2>}
    </div>
  );
};
Header.defaultProps = {
  title: "Indecision App",
};
// class Header extends React.Component {
//   render() {
//     //Render is imp for es6 normally the class properties are not mandatory but here the render method is mandatory

//   }
// }
const Action = (props) => {
  return (
    <div>
      <button onClick={props.handlePick} disabled={!props.hasOptions}>
        What should I do?
      </button>
    </div>
  );
};
// class Action extends React.Component {
//   // handlePick() {
//   //   alert("Hello");
//   // }
//   render() {
//     return (
//       <div>
//         <button
//           onClick={props.handlePick}
//           disabled={!props.hasOptions}
//         >
//           What should I do?
//         </button>
//       </div>
//     );

//   }
// }
const Option = (props) => {
  return (
    <div>
      {props.text}
      <button
        onClick={(e) => {
          props.handleDeleteOption(props.text);
        }}
      >
        Remove
      </button>
    </div>
  );
};
// class Option extends React.Component {
//   render() {
//     return <div>{this.props.text}</div>;
//   }
// }
const Options = (props) => {
  return (
    <div>
      <h1>Options go here!</h1>
      <button onClick={props.handleDeleteOptions}>Remove All</button>
      {props.options.length === 0 && (
        <p>Please add an option to get started!</p>
      )}
      <div>
        {props.options.map((element) => {
          return (
            <Option
              text={element}
              key={element}
              handleDeleteOption={props.handleDeleteOption}
            />
          );
        })}
      </div>
    </div>
  );
};
// class Options extends React.Component {
//   // constructor(props) {
//   //   super(props); //this.props is now defined
//   //   this.handleRemoveAll = this.handleRemoveAll.bind(this); //the constructor and render are not event handlers and hence have the correct this binding
//   // }

//   render() {
//     return (
//       <div>
//         <h1>Options go here!</h1>
//         <button onClick={this.props.handleDeleteOptions}>Remove All</button>
//         <div>
//           {this.props.options.length}
//           {this.props.options.map((element) => {
//             return <Option text={element} key={element} />;
//           })}
//         </div>
//       </div>
//     );
//   }
// }
class AddOption extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      error: undefined,
    };
  }
  handleAddOption(e) {
    e.preventDefault();
    const option = e.target.elements.addoptions.value.trim();

    const error = this.props.addoption(option);

    this.setState(() => ({ error }));
    if (!error) e.target.elements.addoptions.value = "";
  }
  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleAddOption}>
          <input placeholder="Option" name="addoptions" type="text" />
          <button>Add Option</button>
        </form>
      </div>
    );
  }
}

// const User = (props) => {
//   return (
//     <div>
//       <p>Name:{props.name} </p>
//       <p>Age:{props.age} </p>
//     </div>
//   );
// }; //faster than class based components
ReactDOM.render(<Indecision />, document.querySelector(".app"));
