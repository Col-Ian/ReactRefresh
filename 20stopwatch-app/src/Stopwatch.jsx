import { useState, useEffect, useRef } from "react";

function Stopwatch(){

    const [isRunning, setIsRunning] = useState(false);
    const [timeElapsed, setTimeElapsed] = useState(0);
    const intervalIdRef = useRef(null);
    const startTimeRef = useRef(0)

    useEffect(() => {
        if(isRunning){
            intervalIdRef.current = setInterval(() => {
                setTimeElapsed(Date.now() - startTimeRef.current)
            }, 10);
        }

        return() => {
            clearInterval(intervalIdRef.current);
        }
    }, [isRunning])

    function start(){
        setIsRunning(true)
        startTimeRef.current = Date.now() - timeElapsed;
        
    }

    function stop(){
        setIsRunning(false)
    }

    function reset(){
        setTimeElapsed(0)
        setIsRunning(false)
    }

    function formatTime(){
        let hours = Math.floor(timeElapsed / (1000 * 3600))
        let minutes = Math.floor(timeElapsed / (1000 * 60) % 60)
        let seconds = Math.floor(timeElapsed / (1000) % 60)
        let milliseconds = Math.floor((timeElapsed % 1000) / 60)

        hours = String(hours).padStart(2, "0")
        minutes = String(minutes).padStart(2, "0")
        seconds = String(seconds).padStart(2, "0")
        milliseconds = String(milliseconds).padStart(2, "0")

        if(hours > 0 ){
            return `${hours}:${minutes}:${seconds}:${milliseconds}`
        } else{
            return `${minutes}:${seconds}:${milliseconds}`
        }
    }

    return(
        <div className="stopwatch">
            <div className="display">
                {formatTime()}
            </div>
            <div className="controls">
                <button className="start-button" onClick={start}>Start</button>
                <button className="stop-button" onClick={stop}>Stop</button>
                <button className="reset-button" onClick={reset}>Reset</button>
            </div>
        </div>
    )
}

export default Stopwatch