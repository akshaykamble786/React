import React, { useEffect, useState } from 'react';

const BgChanger = () => {
    const [color, setColor] = useState("");
    const [isActive, setIsActive] = useState(false);

    const changeColor = () => {
        let red = Math.floor(Math.random() * 256);
        let green = Math.floor(Math.random() * 256);
        let blue = Math.floor(Math.random() * 256);

        setColor(`rgb(${red}, ${green}, ${blue})`);
    };

    useEffect(() => {
        if (isActive) {
            const interval = setInterval(changeColor, 500);
            return () => clearInterval(interval); 
        }
    }, [isActive]);

    useEffect(() => {
        document.body.style.backgroundColor = color;
    }, [color]);

    const handleButtonClick = () => {
        setIsActive(!isActive);
    };

    return (
        <div>
            <button onClick={handleButtonClick}>
                {isActive ? "Stop Changing Color" : "Start Changing Color"}
            </button>
        </div>
    );
};

export default BgChanger;
