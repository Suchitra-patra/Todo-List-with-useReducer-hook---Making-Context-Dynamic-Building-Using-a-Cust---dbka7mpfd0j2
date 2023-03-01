import React, { useState } from "react"

const AddTodo = ({ dispatch }) => {
    const [todo, setTodo] = useState("")
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch({type:'add',payload:{id:Date.now(),title:todo}})
        setTodo("")
    }

    return (
        <form id="todo-form" onSubmit={handleSubmit}>
            <label htmlFor="todo-input">Enter todo text here</label>
            <input type="text" id="todo-input" value={todo} onChange={(e) => {setTodo(e.target.value) }} />
            <button type="submit">Add todo</button>
        </form>
    )
}

export { AddTodo }