import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './projects/ToDoList/todolist.css'
import './projects/ColorPicker/colorpicker.css';
import "./projects/Stopwatch/stopwatch.css"
import "./projects/Calculator/calculator.css";


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
