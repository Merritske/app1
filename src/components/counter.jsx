import { useState } from "react"

export default function Counter(){
//   let isGoingOut = ""
const[isGoingOut, setIsGoingOut] = useState(true)

    const [count, setCount] = useState(0)
function handleMouse(){
    console.log("hello")
    setIsGoingOut(prevIsGoingOut => !prevIsGoingOut)
}
function handlePlus() {
setCount( (prevCount) =>  { return prevCount +1}
  )
}
function handleMin() {
    setCount(prevCount=> prevCount -1 )
}
// if(count %3 ===0 || count %5 ===0){
//     isGoingOut = false   
// }else{
//     isGoingOut = true
// }

    return(
        <div className="counter"> 
         <button className="increase" onClick={handlePlus}>+</button>
         <div className="count" onMouseEnter={handleMouse} onMouseLeave={handleMouse}> 
          <h1>{count}</h1>
          </div>
          <button className="decrease" onClick={handleMin}>-</button>
          <h3>
              {/* Let the counter decide your answer:   */}
              Do you want to go out?
              {isGoingOut ? "Yes" : "No"}</h3>
        </div>
    )
}