import React from "react";

export default function Todo({ text, todo, todos, setTodos }) {
  const deleteHandler = () => {
    setTodos(
      todos.filter((each) => {
        if (each.id !== todo.id) {
          return each;
        }
      })
    );
  };
  const completeHandler = () => {
    setTodos(
      todos.map((each) => {
        if (each.id === todo.id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        } else {
          return each;
        }
      })
    );
  };
  return (
    <div className="todo">
      <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
        {text}
      </li>
      <button onClick={completeHandler} className="complete-btn">
        <i className="fa fa-check"></i>
      </button>
      <button onClick={deleteHandler} className="trash-btn">
        <i className="fa fa-trash"></i>
      </button>
    </div>
  );
}
