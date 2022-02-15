import { useState } from "react";
import ster from "../images/ster.png"
import star from "../images/star.png"


export default function PersonCard() {
    const [contact, setContact] = useState({
        firstName: "John",
        lastName: "Doe",
        phone: "+1 (987) 555-2641",
        email: "itsmyrealName@example.com",
        isFavorite: false
    })
    console.log(contact.isFavorite)
    let starIcon = contact.isFavorite ? `${star}` : `${ster}`
    console.log(starIcon)
    function toggleFavorite() {

        setContact(prevContact => {
            return {
                ...prevContact,
                isFavorite: !prevContact.isFavorite
            }
        })
    }

    return (
        <div className="person_card">
            <img className="profielfoto"
                src="https://www.gerbengvandijk.nl/wp-content/uploads/2021/01/geen-profielfoto-vrouw-silhouet-pasfoto-anoniem-800x600-1.jpg" alt="profielfoto" />

            <div className="person_content">
                <img className="isFavorite" src={starIcon} onClick={toggleFavorite} />
                <h1> {contact.firstName} {contact.lastName}</h1>
                <h3>{contact.phone}</h3>
                <h3> {contact.email}</h3>

            </div>
        </div>
    )



}