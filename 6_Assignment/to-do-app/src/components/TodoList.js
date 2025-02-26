import React, { useState } from "react";

const TodoList = () => {
  const [task, setTask] = useState(""); // Input value
  const [tasks, setTasks] = useState([]); // To do list array

  // Function to add new task
  const addTask = () => {
    if (task.trim() === "") return; // Prevent empty task
    setTasks((prevTasks) => [...prevTasks, task].sort()); // Add & sort tasks
    setTask(""); // Clear input field
  };

  // Function to remove task
  const removeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter a task..."
      />
      <button onClick={addTask}>Add</button>

      <ul>
        {tasks.map((t, index) => (
          <li key={index}>
            {t} <button onClick={() => removeTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
