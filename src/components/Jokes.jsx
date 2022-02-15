import { useState } from "react"
import like from "../images/like.png"

export default function Jokes(props) {
let [likes, setLikes] = useState(0)
function handleLikes(){
    setLikes(prevLikes=> prevLikes +1)
}
let [dislikes, setDislikes] = useState(0)
function handleDislikes(){
    setDislikes(prevdislikes=> prevdislikes +1)
}
    return (
        <div className="jokes">
           
                <li>
                   {props.setup && <p>{props.setup} </p>} 
                    <p>{props.punchline}</p>
                    <span><img src={like} className="like" onClick={handleLikes }/> {likes}</span>
                    <span><img src={like} className="dislike" onClick={handleDislikes}/> {dislikes}</span>
                </li>


          
        </div>
    )
}