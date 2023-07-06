import React from 'react'
import { TODO } from '../Models'
import SingleTodo from './SingleTodo';

interface props {
    todos: TODO[];
    setTodos: React.Dispatch<React.SetStateAction<TODO[]>>
}

const TodoList: React.FC<props> = ({ todos, setTodos }) => {
    return (
        <>
            {todos.map((todo) => {
                return <SingleTodo todo={todo} key={todo.id} todos={todos} setTodos={setTodos} />
            })}
        </>
    )
}

export default TodoList