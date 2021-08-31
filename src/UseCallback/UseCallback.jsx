import { useCallback, useRef, useState } from "react"
import React from "react";
import styles from './UseRef.module.css'

const UseCallback = () => {
    const [numbers, setNumbers] = useState([1, 2, 3, 4,1, 2, 3, 4,1, 2, 3, 4,1, 2, 3, 4])

    const ulRef = useRef();
    const numbersRef = useRef();
    const addNumber = () => {
        setNumbers(
            [...numbers, numbers.length + 1]
        )
    };

    numbersRef.current=numbers

    const handleScroll = ()=> {
        console.log('скролл', numbersRef.current)
    }


    const start = useCallback(() => {
        ulRef.current.addEventListener('scroll', handleScroll)   
    },[])
    const stop = useCallback(() => {
        ulRef.current.removeEventListener('scroll', handleScroll)   
    },[])

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
                    <button onClick={start}>считсвать скролл</button>
                </div>
                <div>
                    <button onClick={stop}>не считсвать скролл</button>
                </div>
            </div>
        </>
    )
}


export default UseCallback;