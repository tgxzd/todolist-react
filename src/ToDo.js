import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ToDo = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, { text: newTask, completed: false }]);
      setNewTask('');
    }
  };

  const toggleTaskCompletion = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const removeTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">

      <div className="col-md-8 col-lg-4">
      <h1 className="text-center mb-4 display-3  ">
      <span className="text-danger">To-Do</span> 
      <span className="text-primary"> List</span>
      </h1>

        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Add a new task"
          />
        </div>
        <div className="input-group-append">
          <button className="btn btn-outline-success mb-3" onClick={addTask}>Add Task</button>
        </div>
        <ul className="list-group">
          {tasks.map((task, index) => (
            <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
              <span
                style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
                onClick={() => toggleTaskCompletion(index)}
              >
                {task.text}
              </span>
              <button className="btn btn-danger btn-sm" onClick={() => removeTask(index)}>Remove</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ToDo;