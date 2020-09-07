import React from "react";
import Todo from "../components/Todo";

export default function TodoList({ todos, setTodos, currentTodos }) {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {currentTodos.map((todo) => {
          return (
            <Todo
              text={todo.text}
              key={todo.id}
              setTodos={setTodos}
              todos={todos}
              todo={todo}
            />
          );
        })}
      </ul>
    </div>
  );
}
