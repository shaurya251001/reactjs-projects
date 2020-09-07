import React, { useState, useEffect } from "react";
import "./App.css";
import Form from "../src/components/Form";
import TodoList from "./components/TodoList";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [filter, setFilters] = useState("all");
  const [currentTodos, setCurrents] = useState([]);
  useEffect(() => {
    filtershandler();
  }, [todos, filter]);
  const filtershandler = () => {
    if (filter === "all") {
      setCurrents(todos);
    } else if (filter === "completed") {
      setCurrents(
        todos.filter((each) => {
          if (each.completed === true) {
            return each;
          }
        })
      );
    } else {
      setCurrents(
        todos.filter((each) => {
          if (each.completed === false) {
            return each;
          }
        })
      );
    }
  };
  return (
    <div className="App">
      <header>Todo List</header>
      <Form
        setTodos={setTodos}
        todos={todos}
        setInputText={setInputText}
        inputText={inputText}
        setFilters={setFilters}
        setCurrents={setCurrents}
        filter={filter}
      />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
