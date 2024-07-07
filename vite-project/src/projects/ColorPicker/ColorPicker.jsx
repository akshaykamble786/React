import React, { useEffect, useState } from 'react'

const ColorPicker = () => {

    const [color, setColor] = useState();

    const handleColorInput = (event) => setColor(event.target.value) 

    useEffect(()=>{
        document.body.style.backgroundColor = color;
    },[color])

    return (
    <div className="color-picker-container">
        <h2>Color Picker</h2>
        <div className="color-display">
            <p>Selected Color : {color}</p>
        </div>
        <input type="color" value={color} onChange={handleColorInput}/>
    </div>
  )
}

export default ColorPicker