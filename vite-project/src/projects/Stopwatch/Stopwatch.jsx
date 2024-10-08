// import React, { useState, useEffect, useRef} from 'react'

// const Stopwatch = () => {

//     const [isRunning, setIsRunning] = useState(false)
//     const [elapsedTime, setElapsedTime] = useState(0)
//     const intervalIdRef = useRef(null);
//     const startTimeRef = useRef(0)

//     useEffect(()=>{

//         if(isRunning){
//             intervalIdRef.current = setInterval(() => {
//                 setElapsedTime(Date.now() - startTimeRef.current)
//             }, 1000);
//         }

//         return () => {
//             clearInterval(intervalIdRef.current)
//         }

//     },[isRunning])

//     const start = () => {
//         setIsRunning(true)
//         startTimeRef.current = Date.now() - elapsedTime
//     }
//     const stop = () => {
//         setIsRunning(false)
//     }
//     const reset = () => {
//         setIsRunning(false)
//         setElapsedTime(0)
//     }
//     const formatTime = () => {

//         let minutes = Math.floor(elapsedTime / (1000 * 60) % 60);
//         let seconds = Math.floor(elapsedTime / (1000) % 60);
//         let milliseconds = Math.floor((elapsedTime % 1000) / 10);

//         minutes = String(minutes).padStart(2,"0")
//         seconds = String(seconds).padStart(2,"0")
//         milliseconds = String(milliseconds).padStart(2,"0")

//         return `${minutes} : ${seconds} : ${milliseconds}`
//     }


//   return (
//     <div className="stopwatch-container">
//         <div className="stopwatch-display">
//             <h2>{formatTime()}</h2>
//             <div className="btns">
//                 <button onClick={start} className='start-btn'>Start</button>
//                 <button onClick={stop} className='stop-btn'>Stop</button>
//                 <button onClick={reset} className='reset-btn'>Reset</button>
//             </div>
//         </div>
//     </div>
//   )
// }

// export default Stopwatch



import React, { useState, useEffect, useRef } from 'react';

const Stopwatch = () => {
    const [isRunning, setIsRunning] = useState(false);
    const [elapsedTime, setElapsedTime] = useState(0);
    const intervalIdRef = useRef(null);
    const startTimeRef = useRef(0);

    useEffect(() => {
        if (isRunning) {
            intervalIdRef.current = setInterval(() => {
                setElapsedTime(Date.now() - startTimeRef.current);
            }, 10);
        }

        return () => {
            clearInterval(intervalIdRef.current);
        };
    }, [isRunning]);

    const start = () => {
        setIsRunning(true);
        startTimeRef.current = Date.now() - elapsedTime;
    };

    const stop = () => {
        setIsRunning(false);
    };

    const reset = () => {
        setIsRunning(false);
        setElapsedTime(0);
    };

    const formatTime = () => {
        let minutes = Math.floor(elapsedTime / (1000 * 60) % 60);
        let seconds = Math.floor(elapsedTime / 1000 % 60);
        let milliseconds = Math.floor((elapsedTime % 1000) / 10);

        minutes = String(minutes).padStart(2,"0")
        seconds = String(seconds).padStart(2,"0")
        milliseconds = String(milliseconds).padStart(2,"0")
        

        return `${minutes} : ${seconds} : ${milliseconds}`;
    };

    return (
        <div className="stopwatch-container">
            <div className="stopwatch-display">
                <h2>{formatTime()}</h2>
            </div>
            <div className="btns">
                <button onClick={start} className="start-btn">Start</button>
                <button onClick={stop} className="stop-btn">Stop</button>
                <button onClick={reset} className="reset-btn">Reset</button>
            </div>
        </div>
    );
};

export default Stopwatch;
