import React from "react";

// import component 
import Todo from "./Todo"

const TodoList = ({ todos, setTodos, filteredTodos }) => {
    return (
        <div className="todo-container">
            <ul className="todo-list">
                {filteredTodos.map(todo => (
                    <Todo
                        setTodos={setTodos}
                        todo={todo}
                        todos={todos}
                        key={todo.id} //react需要有一个unique key 去定位这个element 以便后期删除
                        text={todo.text}
                        id={todo.id} />
                ))}
            </ul>
        </div>
    );
};

export default TodoList;