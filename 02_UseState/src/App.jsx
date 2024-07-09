import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [count, setCount] = useState(0);

  const addValue = () => {
    if(count === 20){
      alert("Limit reached")
    }else{
      setCount(c => c + 1)
    }
  }
  const subtractValue = () => {
    if(count === 0){
      alert("Limit reached")
    }else{
      setCount(c => c - 1)
    }
  } 

  return (
    <div>
      <p>Count : {count}</p>
    <button onClick={addValue}>Add</button>
    <button onClick={subtractValue}>Minus</button>
    </div>
  )
}

export default App
