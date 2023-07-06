import React, { useState } from 'react'
import { TODO } from '../Models'

interface props {
    todo: TODO,
    todos: TODO[],
    setTodos: React.Dispatch<React.SetStateAction<TODO[]>>
}

const SingleTodo: React.FC<props> = ({ todo, todos, setTodos }) => {

    const [doneText, setdoneText] = useState<boolean>(false)


    const handleDone = (id: number) => {
        setTodos(
            todos.map((todo) => todo.id === id ? { ...todo, isDone: !todo.isDone } : todo)
        );
        setdoneText(!doneText)
    }

    const handleDelete = (id: number) => {
        setTodos(todos.filter((todo) => todo.id !== id))
    }

    return (
        <div className='single_todo ' style={{ display: "flex", justifyContent: "space-around" }}>
            {todo.isDone ? (<s>{todo.todo}</s>) : (<p>{todo.todo}</p>)}
            <button onClick={() => { handleDelete(todo.id) }}>Delete</button>
            <button onClick={() => { handleDone(todo.id) }}>{doneText ? "UnDone" : "Done"}</button>
        </div>
    )
}

export default SingleTodo