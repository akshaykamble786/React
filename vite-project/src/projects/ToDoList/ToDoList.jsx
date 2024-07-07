import React, { useEffect, useState } from 'react';

const ToDoList = () => {
  const [tasks, setTasks] = useState(()=>{
    const savedTasks = localStorage.getItem('task');
    return savedTasks ? JSON.parse(savedTasks) : []
  });
  const [newTask, setNewTask] = useState('');

  useEffect(()=>{
    localStorage.setItem('task',JSON.stringify(tasks))
  },[tasks])

  const handleInputChange = (event) => setNewTask(event.target.value);

  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks(t => [...t, newTask]);
      setNewTask('');
    }
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const moveTaskUp = (index) => {
    if (index > 0) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]];
      setTasks(updatedTasks);
    }
  };

  const moveTaskDown = (index) => {
    if (index < tasks.length - 1) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];
      setTasks(updatedTasks);
    }
  };

  return (
    <div className='to-do-list'>
      <h2>To-Do List</h2>
      <input type="text" placeholder='Enter a task...' onChange={handleInputChange} value={newTask} />
      <button className='add-btn' onClick={addTask}>Add</button>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <span className='text'>{task}</span>
            <button className='delete' onClick={() => deleteTask(index)}>Delete</button>
            <button className='up-btn' onClick={() => moveTaskUp(index)} aria-label="Move task up">👆</button>
            <button className='down-btn' onClick={() => moveTaskDown(index)} aria-label="Move task down">👇</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
