class Header extends React.Component {
  render() {
    //Render is imp for es6 normally the class properties are not mandatory but here the render method is mandatory
    return (
      <div>
        <h1>Indecision App</h1>
        <h2>Put your life in the hands of a computer</h2>
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
class Options extends React.Component {
  render() {
    return (
      <div>
        <h1>Options go here!</h1>
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

const jsx = (
  <div>
    <Header />
    <Action />
    <Options />
    <AddOption />
    {/* <Header />Uppercase is required here(not optional) */}
  </div>
);
ReactDOM.render(jsx, document.querySelector(".app"));
