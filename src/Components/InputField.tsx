import React from 'react'

interface props {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (e: React.FormEvent) => void;
}


const InputField: React.FC<props> = ({ todo, setTodo, handleAdd }) => {
    return (
        <>
            <form onSubmit={handleAdd}>
                <input
                    type="input"
                    placeholder='Type Here A Task...'
                    className='Input_Field'
                    value={todo}
                    onChange={(e) => setTodo(e.target.value)}
                />
                <button className='Input_Field_Button'>Go</button>
            </form>
        </>
    )
}

export default InputField