import logomeme from "../images/memeLogo.jpg"

export default function MemeHeader(){
    return(
        <div className="memeheader">
            <img className="logomeme" src={logomeme} alt="logomeme" />
            <h1>MEMES</h1>
        </div>
    )
}