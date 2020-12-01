import React from "react";

const Form = ({setInputText, setTodos, todos, inputText, setStatus}) => {
    //here I can write js code and function
    const inputTextHandler = (e) => {
        setInputText(e.target.value);
    }
    //用于btn 的function 
    const submitTodoHandler = (e) => {
        e.preventDefault(); //阻止每次点击都刷新页面
        setTodos([
            //...表示如果已经有todo在list里面就直接传递过来
            ...todos, {text: inputText, completed: false, id: Math.random()}
        ])
        setInputText("");
    }
    // to do filter
    const statusHandler = (e) => {
        setStatus(e.target.value)
    }
    return (
        <form>
            <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input" />
            <button onClick={submitTodoHandler}className="todo-button" type="submit">
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
                <select onChange={statusHandler} name="todos" className="filter-todo">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    );
}

export default Form;