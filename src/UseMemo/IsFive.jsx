import React, { useMemo } from "react";


let rerender = 0;
const IsFive = React.memo(
    ({ value }) => {
    console.log(`is five render: ${++rerender}`)
    const getResult = useMemo(() => {
        let i = 0;
        while (i < 600000000) i++;
        return value === 5 ? 'Введено 5' : "Введено не 5"
    }, [value]);

    return (
        <h3>
            {getResult}
        </h3>
    )},
        (prevPops, nextProps) => {

            if (nextProps.value === 5) {
                return false
            } else {
                return true
            }
        },
    )
export default IsFive;