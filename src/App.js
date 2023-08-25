import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TaskCard from './components/Taskcard';
import TaskForm from './components/Taskform';

const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    const response = await axios.get('/api/tasks');
    setTasks(response.data);
  };

  const handleAddTask = async (taskData) => {
    const response = await axios.post('/api/tasks', taskData);
    setTasks([...tasks, response.data]);
  };

  const handleDeleteTask = async (taskId) => {
    await axios.delete(`/api/tasks/${taskId}`);
    const updatedTasks = tasks.filter((task) => task._id !== taskId);
    setTasks(updatedTasks);
  };

  return (
    <div className="app">
      <h1>Kanban Board</h1>
      <div className="task-list">
        <div className="status-column">
          <h2>To Do</h2>
         
        </div>
        <div className="status-column">
          <h2>Doing</h2>
         
        </div>
        <div className="status-column">
          <h2>Done</h2>
        </div>
      </div>
      <TaskForm onSubmit={handleAddTask} />
    </div>
  );
};

export default App;
