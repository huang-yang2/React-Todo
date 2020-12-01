import React, { useState, useEffect } from "react";
import "App.css";
// importing components
import Form from "./components/Form";
import TodoList from "./components/TodoList"

function App() {

  //useState
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]); //放在这里所以form也可以用这个state
  const [status, setStatus] = useState("all");// all will be default
  const [filteredTodos, setFilteredTodos] = useState([]); //把第二个state里面的todo通过第三个state的状态filter， 放到这个state里面
  //run once when the app start
  useEffect(() => {
    getLocalTodos()
  }, [])

  //use effect 
  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [todos, status])

  const filterHandler = () => {
    switch (status) {
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true))
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter(todo => todo.completed === false))
        break;
      default:
        setFilteredTodos(todos)
        break;
    }
  }

  const saveLocalTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  const getLocalTodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem('todos'));
      setTodos(todoLocal)
    }
  }
  return (
    <div className="App">
      <header>
        <h1>Todo List </h1>
      </header>
      <Form
        inputText={inputText}
        todos={todos}
        setTodos={setTodos}
        setInputText={setInputText}
        setStatus={setStatus}
      />

      <TodoList
        setTodos={setTodos}
        todos={todos}
        filteredTodos={filteredTodos}
      />
    </div>
  );
}

export default App;
