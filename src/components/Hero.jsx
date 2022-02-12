import F from "../images/avondFlensburg.JPG"
import B from "../images/Burg-Reuland.JPG"
import D from "../images/Denmark.JPG"
import DP from "../images/drielandenpunt.JPG"
import M from "../images/meeuwStrand.JPG"
import O from "../images/ooievaars.JPG"
import PC from "../images/panoramaCoo.JPG"
import P from "../images/pinguins.JPG"

export default function Hero(){
    return(
        <div className="hero">

  <div className="hero-text">
                    <h1>Sfeerfoto's</h1>
                    <p>Let's go on holiday</p>
                    </div>

            <div className="foto">
          <img className="f" src={F} />
          <img className="b" src={B} />
          <img className="f" src={D} />
          <img className="b" src={DP} />
          <img className="f" src={M} />
          <img className="b" src={O} />
          <img className="f" src={PC } />
          <img className="b" src={P} />
                    </div>

                  
        </div>
    )
}