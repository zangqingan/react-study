import { useState } from 'react'

export default function Count() {
    const [ count,setCount ] = useState(3)
    const remove = () => {
        setCount((preCount) => preCount - 1 )
    }
    
    const add = () => {
        setCount((preCount) => preCount + 1 )
    }
    return (
        <div>
            <div>{count}</div>
            <button onClick={remove}>-</button>
            <button onClick={add}>+</button>
        </div>
    )
}