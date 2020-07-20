"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
var Indecision = function (_React$Component) {
  _inherits(Indecision, _React$Component);

  function Indecision(props) {
    _classCallCheck(this, Indecision);

    var _this = _possibleConstructorReturn(this, (Indecision.__proto__ || Object.getPrototypeOf(Indecision)).call(this, props));

    _this.handleDeleteOptions = _this.handleDeleteOptions.bind(_this);
    _this.state = {
      options: props.options //props.options is not defined (towards the end of the app in ReactDOM) so it falls back to the default props of options=[],
    };
    _this.handlePick = _this.handlePick.bind(_this);
    _this.handleAddOption = _this.handleAddOption.bind(_this);
    _this.handleDeleteOption = _this.handleDeleteOption.bind(_this);
    return _this;
  }

  _createClass(Indecision, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      console.log("fetch data");
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      console.log("saving data");
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      console.log("component unmounted");
    }
    //handleDeleteOptions

  }, {
    key: "handleDeleteOptions",
    value: function handleDeleteOptions() {
      this.setState(function () {
        return { options: [] };
      });
    }
  }, {
    key: "handlePick",
    value: function handlePick() {
      var x = Math.floor(Math.random(this.state.options) * this.state.options.length);
      alert(this.state.options[x]);
    }
  }, {
    key: "handleAddOption",
    value: function handleAddOption(option) {
      if (!option) {
        return "Enter a valid item to add";
      } else if (this.state.options.indexOf(option) > -1) {
        return "Option already exists";
      } else if (option) {
        this.setState(function (prevState) {
          return {
            options: prevState.options.concat([option])
          };
        }); //do not change the state value ever, only operations on the state are allowed.
        // this.setState((prevState) => {
        //   return {
        //     options: prevState.options.push(
        //       option.target.elements.addoptions.value.trim()
        //     ),
        //   };
        // });
      }
    }
  }, {
    key: "handleDeleteOption",
    value: function handleDeleteOption(option) {
      this.setState(function (prevState) {
        return {
          options: prevState.options.filter(function (element) {
            return element !== option;
          })
        };
      });
    }
  }, {
    key: "render",
    value: function render() {
      var subtitle = "Put your life in the hands of a computer";
      return React.createElement(
        "div",
        null,
        React.createElement(Header, { subtitle: subtitle }),
        React.createElement(Action, {
          handlePick: this.handlePick,
          hasOptions: this.state.options.length ? true : false
        }),
        React.createElement(Options, {
          options: this.state.options,
          handleDeleteOptions: this.handleDeleteOptions,
          handleDeleteOption: this.handleDeleteOption
        }),
        React.createElement(AddOption, { addoption: this.handleAddOption })
      );
    }
  }]);

  return Indecision;
}(React.Component);

Indecision.defaultProps = {
  options: []
};
var Header = function Header(props) {
  return React.createElement(
    "div",
    null,
    React.createElement(
      "h1",
      null,
      props.title
    ),
    props.subtitle && React.createElement(
      "h2",
      null,
      props.subtitle
    )
  );
};
Header.defaultProps = {
  title: "Indecision App"
};
// class Header extends React.Component {
//   render() {
//     //Render is imp for es6 normally the class properties are not mandatory but here the render method is mandatory

//   }
// }
var Action = function Action(props) {
  return React.createElement(
    "div",
    null,
    React.createElement(
      "button",
      { onClick: props.handlePick, disabled: !props.hasOptions },
      "What should I do?"
    )
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
var Option = function Option(props) {
  return React.createElement(
    "div",
    null,
    props.text,
    React.createElement(
      "button",
      {
        onClick: function onClick(e) {
          props.handleDeleteOption(props.text);
        }
      },
      "Remove"
    )
  );
};
// class Option extends React.Component {
//   render() {
//     return <div>{this.props.text}</div>;
//   }
// }
var Options = function Options(props) {
  return React.createElement(
    "div",
    null,
    React.createElement(
      "h1",
      null,
      "Options go here!"
    ),
    React.createElement(
      "button",
      { onClick: props.handleDeleteOptions },
      "Remove All"
    ),
    React.createElement(
      "div",
      null,
      props.options.map(function (element) {
        return React.createElement(Option, {
          text: element,
          key: element,
          handleDeleteOption: props.handleDeleteOption
        });
      })
    )
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

var AddOption = function (_React$Component2) {
  _inherits(AddOption, _React$Component2);

  function AddOption(props) {
    _classCallCheck(this, AddOption);

    var _this2 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

    _this2.handleAddOption = _this2.handleAddOption.bind(_this2);
    _this2.state = {
      error: undefined
    };
    return _this2;
  }

  _createClass(AddOption, [{
    key: "handleAddOption",
    value: function handleAddOption(e) {
      e.preventDefault();
      var option = e.target.elements.addoptions.value.trim();

      var error = this.props.addoption(option);

      this.setState(function () {
        return { error: error };
      });

      e.target.elements.addoptions.value = "";
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        this.state.error && React.createElement(
          "p",
          null,
          this.state.error
        ),
        React.createElement(
          "form",
          { onSubmit: this.handleAddOption },
          React.createElement("input", { placeholder: "Option", name: "addoptions", type: "text" }),
          React.createElement(
            "button",
            null,
            "Add Option"
          )
        )
      );
    }
  }]);

  return AddOption;
}(React.Component);

// const User = (props) => {
//   return (
//     <div>
//       <p>Name:{props.name} </p>
//       <p>Age:{props.age} </p>
//     </div>
//   );
// }; //faster than class based components


ReactDOM.render(React.createElement(Indecision, null), document.querySelector(".app"));
