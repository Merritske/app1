import ster from "../images/ster.png"
import star from "../images/star.png"

export default function Star(props){
    const starIcon = props.isFilled ? `${star}` : `${ster}`
    return (
        <div>
            <img className="isFavorite" src={starIcon} onClick={props.handleClick} />
        </div>
    )
}