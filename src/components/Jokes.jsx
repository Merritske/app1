import like from "../images/like.png"

export default function Jokes(props) {
    return (
        <div className="jokes">
           
                <li>
                   {props.setup && <p>{props.setup} </p>} 
                    <p>{props.punchline}</p>
                    <span><img src={like} className="like" /> {props.likes}</span>
                    <span><img src={like} className="dislike" /> {props.dislikes}</span>
                </li>


          
        </div>
    )
}