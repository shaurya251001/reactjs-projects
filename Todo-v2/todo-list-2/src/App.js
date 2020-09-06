import React, { useState } from "react";
import "./App.css";
import Form from "../src/components/Form";
import TodoList from "./components/TodoList";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  return (
    <div className="App">
      <header>Todo List</header>
      <Form
        setTodos={setTodos}
        todos={todos}
        setInputText={setInputText}
        inputText={inputText}
      />
      <TodoList />
    </div>
  );
}

export default App;
