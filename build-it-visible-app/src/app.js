class VisibiltyToggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visibility: false,
    };
    this.handleToggleVisibilty = this.handleToggleVisibilty.bind(this);
  }
  handleToggleVisibilty() {
    this.setState((prevState) => {
      return {
        visibility: !prevState.visibility,
      };
    });
  }
  render() {
    return (
      <div>
        <h1>Visibility Toggle</h1>
        <button onClick={this.handleToggleVisibilty}>
          {this.state.visibility ? "Hide Details" : "Show Details"}
        </button>
        {this.state.visibility && <p>Some text to see</p>}
      </div>
    );
  }
}
ReactDOM.render(<VisibiltyToggle />, document.querySelector(".app"));
