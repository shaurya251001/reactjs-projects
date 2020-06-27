import React, { Component } from "react";
import Todos from "./Todos";

export class Todoitem extends Component {
  render() {
    return (
      <div>
        <p>{this.props.todo.title}</p>
      </div>
    );
  }
}

export default Todoitem;
