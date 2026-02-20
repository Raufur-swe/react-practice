import React, { useState } from 'react'

const Todo = () => {

    const [todo, setTodo] = useState([])
    const [text, setText] = useState("");
    const [filter, setFilter] = useState("all");
    const status = ["all", "active", "complete"];

    const addTask = () => {
        if (!text.trim()) return;
        setTodo([
            ...todo,
            {
                id: crypto.randomUUID(),
                text,
                complete: false,
            }
        ])
        setText("")
    }

    const deleteTodo = (id) => {
        setTodo(todo.filter(t => t.id !== id))
    }


    const todoStatus = (id) => {
        setTodo(todo.map(t => t.id === id ?
            {
                ...t,
                complete: !t.complete
            } : t
        ))
    }


    const filterTodo = todo.filter(t => {
        if (filter === "active") return !t.complete;
        if (filter === "complete") return t.complete;

        return true
    })



    return (

        <div className="flex flex-col items-center border-2 px-4 py-5 bg-red-200 w-1/2 rounded-lg shadow-md">

            <h1 className="font-bold text-2xl mb-4">
                TODO Application
            </h1>

            <div className="flex justify-center gap-2 p-3 rounded-md w-full max-w-md mb-2">
                <input
                    type="text"
                    placeholder="Write task"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && addTask()}
                    className="flex-1 p-3 outline-none border-none bg-white rounded-md"
                />
                <button onClick={addTask} className="bg-gray-400 rounded-2xl px-4 py-2 cursor-pointer hover:bg-gray-500">
                    Add
                </button>
            </div>

            <div className=' bg-red-100 w-full flex items-center justify-between px-3 py-2 rounded-2xl mb-2'>
                {status.map(f => (
                    <button key={f} onClick={() => setFilter(f)}
                        className={` px-5 py-1.5 gap-2 cursor-pointer rounded-2xl ${filter === f && "bg-black text-white"} `} >{f}</button>
                ))}
            </div>

            <div className=' bg-blue-500  w-full p-3 ' >

                <ul className=' flex flex-col gap-5 ' >

                    {filterTodo.map(t => (
                        <li key={t.id} className=' flex items-center justify-between bg-gray-300 p-2 rounded-xl   ' >
                            <span
                                onClick={() => todoStatus(t.id)}
                                className={`cursor-pointer flex-1 ${t.complete ? "line-through text-gray-500" : ""
                                    }`}
                            >
                                {t.text}
                            </span>
                            <button onClick={() => deleteTodo(t.id)} className=' bg-red-700 w-7 rounded-full text-white ' >X</button>
                        </li>
                    ))}
                </ul>
            </div>

        </div>

    )
}

export default Todo