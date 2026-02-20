import React, { useState } from 'react'

const App = () => {

  // this state for 3 column or box like : todo , inprogress , done
  const [column, setColumn] = useState({
    todo: {
      name: "To Do",
      item: [
        { id: "1", content: "start react projects" }

      ],
    },
    inProgress: {
      name: "In Progress",
      item: [
        { id: "2", content: "doing react projects" }
      ]
    },
    done: {
      name: "Done",
      item: [
        { id: "3", content: "done react projects" }
      ]
    }
  });

  const [newTask, setNewTask] = useState("");
  const [activeColumns, setActiveColumns] = useState("todo");
  const [draggedItem, setDreggedItem] = useState(null);


  const addTask = () => {
    if (newTask.trim() == "") return;
    const updatedcolumn = { ...column };

    updatedcolumn[activeColumns].item.push({
      id: Date.now().toString(),
      content: newTask,
    })
    setColumn(updatedcolumn);
    setNewTask("");
  }

  const removeTask = (columnId, taskId) => {
    const updatedcolumn = { ...column };
    updatedcolumn[columnId].item = updatedcolumn[columnId].item.filter((item) => item.id !== taskId);
    setColumn(updatedcolumn);
  }

  const handleDragStart = (columnId, item) => {
    setDreggedItem({ columnId, item })
  }
 const handleDragOver = (e) => {
  e.preventDefault();
};


  const handleDrop = (e, columnId) => {
    e.preventDefault();

    if (!draggedItem) return;

    const { columnId: sourceColumnId, item } = draggedItem;
    if (sourceColumnId === columnId) return;

    const updatedcolumn = { ...column };
    updatedcolumn[sourceColumnId].item = updatedcolumn[sourceColumnId].item.filter((i) => i.id != item.id)
    updatedcolumn[columnId].item.push(item);
    setColumn(updatedcolumn);
    setDreggedItem(null)

  }

  const columnStyles = {
    todo: {
      header: " bg-red-500 ",
      border: "border-black-50",
    },
    inProgress: {
      header: " bg-yellow-500 ",
      border: "border-black-50",
    },
    done: {
      header: " bg-green-500 ",
      border: "border-black-50",
    },
  }
  return (
    <div className='p-6 min-h-screen bg-gray-400 flex items-center justify-center'>

      <div className=' flex items-center justify-center flex-col gap-4 w-full max-w-6xl ' >

        <h1 className=' text-white font-bold text-5xl'>
          React Kanban board
        </h1>
        <div className=' flex w-full mb-8 max-w-lg shadow-lg rounded-lg overflow-hidden ' >
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="add new task...."
            onKeyDown={(e) => e.key === "Enter" && addTask()}
            className="grow p-3 bg-zinc-400 text-white border-none"
          />

          <select
            value={activeColumns}
            onChange={(e) => setActiveColumns(e.target.value)}
            className="p-3 bg-zinc-700 text-white border-0"
          >
            {Object.keys(column).map((columnId) => (
              <option value={columnId} key={columnId}>
                {column[columnId].name}
              </option>
            ))}
          </select>

          <button onClick={addTask} className=' px-6 text-white  hover:bg-zinc-200 hover:text-gray-900 transition-all cursor-pointer duration-200'>
            Add Task
          </button>

        </div>

        <div className="flex gap-6 overflow-hidden pb-6 w-full ">

          {Object.keys(column).map((columnId) => (
            <div key={columnId} className={` shrink-0 w-80 bg-zinc-800 rounded-lg shadow-4xl border-t-4 ${columnStyles[columnId].border} `} onDragOver={(e) => handleDragOver(e, columnId)} onDrop={(e) => handleDrop(e, columnId)} >

              <div className={`p-4 text-white ${columnStyles[columnId].header}`} >

                {column[columnId].name}
                <span className=' ml-2 px-2 py-1 bg-black rounded-full text-sm '>
                  {column[columnId].item.length}
                </span>
              </div>
              <div className="p-3 min-h-64">
                {column[columnId].item.length === 0 ? (
                  <div className="text-center py-10 text-white italic text-sm">
                    drop task
                  </div>
                ) : (
                  column[columnId].item.map((item) => (
                    <div
                      key={item.id}
                      className="p-4 bg-zinc-900 text-white mb-2 rounded-2xl flex items-center justify-between"
                      draggable
                      onDragStart={() => handleDragStart(columnId, item)}
                    >
                      <span className='mr-2' >{item.content}</span>
                      <button className=' flex items-center  justify-center bg-red-100 rounded-2xl w-6 h-6 ' onClick={()=>removeTask(columnId , item.id)} >X</button>
                    </div>
                  ))
                )}
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  )
}

export default App