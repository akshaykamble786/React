// App.jsx
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import ArrayObj from './updaterFunctions/ArrayObj'
import ToDoList from './projects/ToDoList/ToDoList'
import ColorPicker from './projects/ColorPicker/ColorPicker'
import Stopwatch from './projects/Stopwatch/Stopwatch'
import Calculator from './projects/Calculator/Calculator'
import BgChanger from './projects/BgChanger/BgChanger'

function App() {
  return (
    <>
      {/* <ArrayObj/>  */}
      <ToDoList/>
      <ColorPicker/>
      <Stopwatch/>
      <Calculator/>
      <BgChanger/>
    </>
  )
}

export default App
