import { useEffect, useState } from "react"
import React from "react";

/* class UseEffect extends React.Component{
    state = {
        numbers: [1, 2, 3, 4],
        count: 0
    };

    componentDidMount(){
        console.log('Отобразился')
    }
    componentDidUpdate(){
        console.log('Обновился')
    }
    componentWillUnmount(){
        console.log ('Удален')
    }
    addNumber = () => {
        let randNumber  = Math.round(Math.random() *100)
        this.setState(
            {numbers: [...this.state.numbers, randNumber]} 
        )
    }
    render(){
       return (
            <> 
            <h1>{count}</h1>
                <button onClick={()=> this.setState({count: this.state.count + 1})}>+</button>
                <ul>
                    {this.state.numbers.map((num, index) => <li key={index}>{num}</li>)}
                </ul>
                <button onClick={() => this.addNumber()}>Новое число</button>
            </>
        )
    }
} */



const UseEffect = () => {
    const [numbers, setNumbers] = useState([1, 2, 3, 4])
    const [count, setCount] = useState(0)
    const addNumber = () => {
        let randNumber = Math.round(Math.random() * 100)
        setNumbers(

            [...numbers, randNumber]
        )
    }

    useEffect(() => {
        console.log('Отобразился')
        return () => {
            console.log('Удален')
        }
    }, [])

    useEffect(() => {
        console.log('Обновился count')
    }, [count])

    useEffect(() => {
        console.log('Обновился number')
    }, [numbers])
    return (
        <>
            <h1>{count}</h1>
            <button onClick={()=> setCount(count + 1)}>+</button>
            <ul>
                {numbers.map((num, index) => <li key={index}>{num}</li>)}
            </ul>
            <button onClick={addNumber}>Новое число</button>
        </>
    )
}


export default UseEffect;