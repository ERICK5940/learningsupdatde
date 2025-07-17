'use client'
import React, { useState, useRef, useEffect } from "react";

function TodoApp() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  }, [tasks]);
  useEffect(() => {
    if (tasks.length > 0) {
      console.log("Task list updated");
    }
  }, [tasks]);

  const handleAdd = () => {
    if (task.trim() !== "") {
      setTasks([...tasks, task]);
      setTask("");
    }
  };
  const handleDelete =(index) => {
    const cleartask= tasks.filter((_,i) => i!== index);
    setTasks(cleartask);

  }

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-xl shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center text-blue-600">📝 To-Do List</h2>

      <div className="flex space-x-2">
        <input
          ref={inputRef}
          type="text"
          value={task}
          placeholder="Enter a task"
          onChange={(e) => setTask(e.target.value)}
          className="flex-grow border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          onClick={handleAdd}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
        >
          Add
        </button>
      </div>

      <ul className="mt-4 list-disc list-inside space-y-1">
        {tasks.map((t, index) => (
          <li key={index} className="text-gray-700">{t}</li>
        ))}
      </ul>
    
      
      
            <ul className="mt-4 list-disc list-inside space-y-2">
        {tasks.map((t, index) => (
          <li key={index} className="text-gray-700 flex justify-between items-center">
            <span>{t}</span>
            <button
              onClick={() => handleDelete(index)}
              className="ml-4 bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 transition"
            >
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
