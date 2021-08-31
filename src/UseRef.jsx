import { useEffect, useRef, useState } from "react"
import React from "react";
import styles from './UseRef.module.css'

const UseRef = () => {
    const [numbers, setNumbers] = useState([1, 2, 3, 4,1, 2, 3, 4,1, 2, 3, 4,1, 2, 3, 4])

    const ulRef = useRef();
    const addNumber = () => {
        setNumbers(
            [...numbers, numbers.length + 1]
        )
    };

    const handleScroll = ()=> {
        console.log('скролл')
    }
    useEffect(() => {
        console.log(111)
        let ul = ulRef.current;
        ul.addEventListener('scroll', handleScroll)
        return () => {
          ul.removeEventListener('scroll', handleScroll)
        }
    });

    const removeScroll = () => {
        ulRef.current.removeEventListener('scroll', handleScroll)
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
                    <button onClick={removeScroll}>не считсвать скролл</button>
                </div>
            </div>
        </>
    )
}


export default UseRef;