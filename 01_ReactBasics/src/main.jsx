import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

const Metro = () => {
  return(
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      Autem voluptatem facere doloremque inventore quia quisquam sapiente neque, atque omnis, 
      dolores placeat, quae accusantium aut ut nemo adipisci magnam consequatur alias.</p>
  )
}

const anotherElement = (
  <h2>kljflsd</h2>
)


const name = "akshay"


// (element, attribute,children, variables )
const dom = React.createElement(
  'a',                    
  {href:"https://google.com", target:'_blank'},
  'click this',
  name
)

ReactDOM.createRoot(document.getElementById('root')).render(
  // App()
  // Metro()

  // dom
  anotherElement
)
