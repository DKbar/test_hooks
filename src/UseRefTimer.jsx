import { useRef, useState } from "react"
import React from "react";
import styles from './UseRef.module.css'

const UseRefTimer = () => {
    const [numbers, setNumbers] = useState([1, 2, 3, 4])

    const ulRef = useRef();
    const timerRef = useRef();
    const addNumber = () => {
        
        setNumbers( (prev)=>
            [...prev, prev.length + 1]
        )
    };

    const start = () => {
        timerRef.current = setInterval(addNumber, 1000)
    }

    const stop = () => {
        clearInterval(timerRef.current)
    }

    return (
        <>
            <div className={styles.list}>
                <ul ref={ulRef}>
                    {numbers.map((num, index) => <li key={index}>{num}</li>)}
                </ul>
                <div>
                    <button onClick={addNumber}>Новое число</button>
                </div>
                <div>
                    <button onClick={start}>start</button>
                </div>
                <div>
                    <button onClick={stop}>stop</button>
                </div>
            </div>
        </>
    )
}


export default UseRefTimer;