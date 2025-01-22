import { useState } from "react";
//Event Handling
const About=()=>{
    var [text, setText] = useState("Vijay");
    function handleText(event){
        setText(event.target.value)
    }
    return (
        <div>
        <h1>This is about Component</h1>
        <h2>Text area</h2>
        <textarea value={text} onChange={handleText}/>
        <p>The text is : {text}</p>
        </div>
    );
};

export default About