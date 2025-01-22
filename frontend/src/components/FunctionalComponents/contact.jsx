import { useState } from "react";

function Contact(){
    var [num,setNum]=useState(0);
    function handleAdd(){
        setNum(num+1)
    }
    return (
        <div>
            <h1>Welcome to Contact Page</h1>
            <h2>This is a state example</h2>
            <h3>Number is {num}</h3>
            <button onClick = {()=>{handleAdd()}}>+</button>
        </div>
    );
};

export default Contact