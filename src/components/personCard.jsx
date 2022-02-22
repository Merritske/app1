

import Star from "./Star";

export default function PersonCard(props) {

 



    return (
        <div className="person_card">
            <img className="profielfoto"
                src="https://www.gerbengvandijk.nl/wp-content/uploads/2021/01/geen-profielfoto-vrouw-silhouet-pasfoto-anoniem-800x600-1.jpg" alt="profielfoto" />

            <div className="person_content">
                <Star isFilled={props.user.isFavorite} handleClick={props.toggle}/>
                <h1> {props.user.firstName} {props.user.lastName}</h1>
                <h3>{props.user.phone}</h3>
                <h3> {props.user.email}</h3>

            </div>
        </div>
    )



}