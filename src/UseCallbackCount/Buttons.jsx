import React from "react";
const Buttons = React.memo(({onPlus, onMinus}) => {
console.log('render')
return (
    <div>
        <button onClick={onPlus}>+</button>
        <button onClick={onMinus}>-</button>
    </div>
)

})

export default Buttons;