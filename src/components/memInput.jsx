import memesData from "./memesData"
import React, { useState } from "react"


export default function MemInput(){
  //  let url
const [ result, setResult] = useState("click me")
    function handleClick(e){
        e.preventDefault()
    //    const memeArray = memesData.data
    //    const randomNum = Math.floor(Math.random()* memeArray.length)
    //    url = memeArray[randomNum].image
   setResult("hit me one more time")
    }

    
    return(
        <div className="form">
            
                <input 
                type="text"
                placeholder="Top text"
                className="form--input" />
                <input type="text"
                placeholder="Bottom text"
                className="form--input" />
                <button className="form--button" onClick={handleClick} >{result}</button>



        </div>
    )
}