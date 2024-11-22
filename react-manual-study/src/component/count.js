import { useState, useRef } from 'react'

export default function Count() {
    const showRef = useRef()
    const [ count,setCount ] = useState(3)
    const remove = () => {
        setCount((preCount) => preCount - 1 )
    }
    
    const add = () => {
        setCount((preCount) => preCount + 1 )
    }
    return (
      <div>
        <div ref={ showRef }>{count}</div>
        <button onClick={ remove }>-</button>
        <button onClick={ add }>+</button>
      </div>
    )
}