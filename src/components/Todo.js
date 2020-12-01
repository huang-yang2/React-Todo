import React from "react";


const Todo = ({ text, id, todos, todo, setTodos}) => {
    //handle delete function
    const deleteHandler = () => {
        setTodos(todos.filter((e1) => e1.id !== todo.id))
        //把id 与现在所点击的这个元素的ID不同的元素筛选出来，相同的那个就会被删掉
    }
    const completeHandler = () => {
        setTodos(todos.map(item => {
            if (item.id === todo.id) {
                // ... means pass all the proporties of item except for completed, and do whatever after :, here it's flipping it 
                return {
                    ...item, completed: !item.completed
                }
            }
            return item;
        }))
    }
    return (
        <div className="todo">
            {/* this part changes classname based on completed state */}
            <li className={`todo-item ${todo.completed ? "completed" : ''}`}>{text}</li>
            <button onClick={completeHandler} className="complete-btn"><i className="fas fa-check"></i></button>
            <button onClick={deleteHandler} className="trash-btn"><i className="fas fa-trash"></i></button>
        </div>

    );
}

export default Todo;