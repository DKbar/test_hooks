import React from "react"
import styles from './UseMemo.module.css'

const render = {
    count1: 0,
    count2: 0,
}


const Count =  React.memo(({ id, value }) => {
    
    console.log (`Count${id} render: ${++render[`count${id}`]}`)
    return (
        <div>
            <h1 className={styles.cyan}>
                {value}
            </h1>
        </div>
    )
})

export default Count;