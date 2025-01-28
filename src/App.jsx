import './App.css';
import React, { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);  // State to store the list of tasks
  const [inputText, setInputText] = useState("");  // State to store the current input value

  // Function to handle adding a new task
  const handleAdd = () => {
    if (inputText.trim() !== "") { // Prevent adding empty tasks
      setTasks(prevTasks => [...prevTasks, inputText]); // Add the new task to the list
      setInputText(""); // Clear the input field
    }
  };

  // Function to handle deleting a task
  const handleDelete = (index) => {
    setTasks(prevTasks => prevTasks.filter((task, taskIndex) => taskIndex !== index)); // Remove task by index
  };

  return (
    <div className="container">
      <header className="header">
        <p>My TO Do List</p>
        <input 
          type="text" 
          placeholder="Task..." 
          value={inputText} 
          onChange={(e) => setInputText(e.target.value)} // Update inputText as user types
        />
        <button className="button" onClick={handleAdd}>ADD</button>
      </header>

      {/* Task List */}
      <ul>
        {tasks.map((task, index) => (
          <li key={index} className="task-item">
            {task} 
            <button onClick={() => handleDelete(index)} className="delete-btn">Delete</button>
          </li>
        ))}
      </ul>
      <div>
     <div class="wave"></div>
     <div class="wave"></div>
     <div class="wave"></div>
  </div>
    </div>
  );
}

export default App;
