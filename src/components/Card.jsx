
import star from "../images/ster.png"

export default function Card(props){

return(
 
    <div className="card">
  <img src={props.img} className="card-img"/>
   <div className="cardstats">
        <img src={star} style={{width:20}} />
        <span>5.0</span>
        <span className="grey">{props.theme}</span>
        <span className="grey">{props.lang}</span>
   </div>
          <p>{props.name}</p>
     <p> <span className="quotes">{props.quote}</span></p>
    </div> 

)
}