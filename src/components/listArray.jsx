import { useState } from "react"
export default function ListArray(props){
const [list, setList] = useState(["thing1", "thing2"])

function handleList(){
 
    setList(prevList=>{
        return ([...prevList, `thing${prevList.length +1}`])
    
    })
    // setInput(()=>{
    //     return value= event.target.value
        
    // })
}
let fullList = list.map(item=> <li key={item}>{item}</li>)
    return(
        <div>
            {/* <input type="text" value={props.value}/> */}
            <button onClick={handleList}>add things</button>
            <ul>
                {fullList}
               
            </ul>
        </div>
    )
}