import React from "react";
import Todo from "../components/Todo";

export default function TodoList({ todos }) {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {todos.map((todo) => {
          return <Todo text={todo.text} key={todo.id} />;
        })}
      </ul>
    </div>
  );
}
