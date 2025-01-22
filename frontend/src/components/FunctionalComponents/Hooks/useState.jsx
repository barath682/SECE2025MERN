import { useState } from "react"

var UseState= ()=>{
    var[a,b] = useState(0)
    return (
        <div>
            <h1>This is useState Example</h1>
            <h4>The number is {num}</h4>
            <button onClick={()=> {
                b(a++)
            }}>increment</button>
            <button onKeyDown={()=> {
                b(a--)
            }}>decrement</button>
            <button onDoubleClick={()=>{
                b(0)
            }}>reset</button>
        </div>
    )
}

export default UseState