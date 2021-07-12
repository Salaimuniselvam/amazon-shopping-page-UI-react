import React from "react"
import "./style.css"
import Button from "./Button"

const  HelloWorld = ()=>{

  
    return (
        <div>
            <h1> Welcome  </h1>
            <h2>Assignment 1</h2>
            <Button ButtonName= "Login" onClick={Click} /> &nbsp;&nbsp;

            <Button ButtonName= "Exit" /> &nbsp;&nbsp; 

            <Button ButtonName= "Forgot Password" />

        </div>
                
    )
}

const Click = () => {
    
    alert("The Assignment-1 is Completed");
    <h1>smd</h1>
}

export default HelloWorld