import { useEffect, useState } from "react"

export default function DataApi(){
const [starData, setStarData] = useState({})
const [count, setCount] = useState(1)


useEffect(()=>{
    console.log("piep")
fetch(`https://swapi.dev/api/people/${count}` )
.then(res => res.json())
.then(data => setStarData(data))
},[count])

    return(
        <div>hello
<button onClick={()=> setCount(count + 1)}>Click</button>
<h2>count is {count}</h2>
<h2>current character is {starData.name}</h2>

            <pre>{JSON.stringify(starData, null, 2)}</pre>
        </div>
    )
}