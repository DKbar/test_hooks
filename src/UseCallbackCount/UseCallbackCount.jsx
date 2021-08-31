import { useCallback, useState } from "react";
import Buttons from "./Buttons";


const UseCallbackCount = () => {

    const [count, setCount] = useState(0)
    const onPlus = useCallback(() => {
        setCount(count => count + 1)
    },[])
    const onMinus = useCallback(() => {
        setCount(count => count - 1)
    },[])

    return(
        <div>
            111111111
            <div>{count}</div>
            <Buttons onPlus={onPlus} onMinus={onMinus} />
        </div>
         
    )


}

export default UseCallbackCount;