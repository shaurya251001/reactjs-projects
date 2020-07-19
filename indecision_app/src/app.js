class Indecision extends React.Component {
  render() {
    const title = "Indecision App";
    const subtitle = "Put your life in the hands of a computer";
    const options = ["1.Option", "2.Option", "3.Option"];
    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <Action />
        <Options options={options} />
        <AddOption />
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
  render() {
    return (
      <div>
        <button>What should I do?</button>
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
  render() {
    return (
      <div>
        <h1>Options go here!</h1>
        {this.props.options.length}
        {this.props.options.map((element) => {
          return <Option text={element} key={element} />;
        })}
      </div>
    );
  }
}
class AddOption extends React.Component {
  render() {
    return (
      <div>
        <form>
          <input placeholder="Option" />
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
