import React from 'react';
const Todo = ({ title, id,dispatch }) => {
    return (
        <div className="todo">
            <div className="todo-title">{title}</div>
            <button className="todo-delete" onClick={() => {
                dispatch({ type: 'delete', payload: { id } })
            }}>Delete</button>
        </div>
    )
}


export { Todo }