import github from "../images/github_icon.png"

export default function Footer(){
    return(
<div className="footer">
    <h5>Samenstelling en design : An Verbeeck
         <span>
        <img className="gitIcon" src={github} />
    </span>
    </h5>
   
</div>
    )
}