import React, { Component } from "react";
import Todos from "./Todos";
import PropTypes from "prop-types";

export class Todoitem extends Component {
  render() {
    return (
      <div>
        <p>{this.props.todo.title}</p>
      </div>
    );
  }
}
Todoitem.propTypes = {
  todos: PropTypes.array.isRequired,
};

export default Todoitem;
