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
      options: []
    };
    _this.handlePick = _this.handlePick.bind(_this);
    _this.handleAddOption = _this.handleAddOption.bind(_this);
    return _this;
  }
  //handleDeleteOptions


  _createClass(Indecision, [{
    key: "handleDeleteOptions",
    value: function handleDeleteOptions() {
      this.setState(function () {
        return {
          options: []
        };
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
      option.preventDefault();
      var text = option.target.elements.addoptions.value.trim();
      if (text) {
        this.setState(function (prevState) {
          return {
            options: prevState.options.concat([text])
          }; //do not change the state value ever, only operations on the state are allowed.
        });
        // this.setState((prevState) => {
        //   return {
        //     options: prevState.options.push(
        //       option.target.elements.addoptions.value.trim()
        //     ),
        //   };
        // });
        console.log(this.state.options);
      }
      option.target.elements.addoptions.value = "";
    }
  }, {
    key: "render",
    value: function render() {
      var title = "Indecision App";
      var subtitle = "Put your life in the hands of a computer";
      return React.createElement(
        "div",
        null,
        React.createElement(Header, { title: title, subtitle: subtitle }),
        React.createElement(Action, {
          handlePick: this.handlePick,
          hasOptions: this.state.options.length ? true : false
        }),
        React.createElement(Options, {
          options: this.state.options,
          handleDeleteOptions: this.handleDeleteOptions
        }),
        React.createElement(AddOption, { addoption: this.handleAddOption })
      );
    }
  }]);

  return Indecision;
}(React.Component);

var Header = function (_React$Component2) {
  _inherits(Header, _React$Component2);

  function Header() {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
  }

  _createClass(Header, [{
    key: "render",
    value: function render() {
      //Render is imp for es6 normally the class properties are not mandatory but here the render method is mandatory
      return React.createElement(
        "div",
        null,
        React.createElement(
          "h1",
          null,
          this.props.title
        ),
        React.createElement(
          "h2",
          null,
          this.props.subtitle
        )
      );
    }
  }]);

  return Header;
}(React.Component);

var Action = function (_React$Component3) {
  _inherits(Action, _React$Component3);

  function Action() {
    _classCallCheck(this, Action);

    return _possibleConstructorReturn(this, (Action.__proto__ || Object.getPrototypeOf(Action)).apply(this, arguments));
  }

  _createClass(Action, [{
    key: "render",

    // handlePick() {
    //   alert("Hello");
    // }
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "button",
          {
            onClick: this.props.handlePick,
            disabled: !this.props.hasOptions
          },
          "What should I do?"
        )
      );
    }
  }]);

  return Action;
}(React.Component);

var Option = function (_React$Component4) {
  _inherits(Option, _React$Component4);

  function Option() {
    _classCallCheck(this, Option);

    return _possibleConstructorReturn(this, (Option.__proto__ || Object.getPrototypeOf(Option)).apply(this, arguments));
  }

  _createClass(Option, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        this.props.text
      );
    }
  }]);

  return Option;
}(React.Component);

var Options = function (_React$Component5) {
  _inherits(Options, _React$Component5);

  function Options() {
    _classCallCheck(this, Options);

    return _possibleConstructorReturn(this, (Options.__proto__ || Object.getPrototypeOf(Options)).apply(this, arguments));
  }

  _createClass(Options, [{
    key: "render",

    // constructor(props) {
    //   super(props); //this.props is now defined
    //   this.handleRemoveAll = this.handleRemoveAll.bind(this); //the constructor and render are not event handlers and hence have the correct this binding
    // }

    value: function render() {
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
          { onClick: this.props.handleDeleteOptions },
          "Remove All"
        ),
        React.createElement(
          "div",
          null,
          this.props.options.length,
          this.props.options.map(function (element) {
            return React.createElement(Option, { text: element, key: element });
          })
        )
      );
    }
  }]);

  return Options;
}(React.Component);

var AddOption = function (_React$Component6) {
  _inherits(AddOption, _React$Component6);

  function AddOption() {
    _classCallCheck(this, AddOption);

    return _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).apply(this, arguments));
  }

  _createClass(AddOption, [{
    key: "render",

    // handleAddOption(e) {
    //   e.preventDefault();
    //   if (e.target.elements.addoptions.value.trim()) {
    //     alert("helllo");
    //   }
    //   e.target.elements.addoptions.value = "";
    // }
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "form",
          { onSubmit: this.props.addoption },
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

// const jsx = (
//   <div>
//     <Header />

//     {/* <Header />Uppercase is required here(not optional) */}
//   </div>
// );


ReactDOM.render(React.createElement(Indecision, null), document.querySelector(".app"));
