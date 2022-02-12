import kwal from "../images/kwallen.JPG"
import maki from "../images/maki.JPG"
import pic1 from "../images/handenPiep.JPG"
import Card from './Card';

export default function Container(){
return (
    <div className='card-container'>
   <Card 
   img={pic1}
   name="Don't hide"
   quote="Don't play hide and seek, they might not want to look for you..."
   theme="wisdom"
   lang=" eng"/>
 <Card 
 img={kwal} 
 name="Kwallen" 
 quote="Sommige mensen zijn net kwallen. zonder ruggegraat, 
 zonder hersenen en erg doorzichtig!"
 theme="funny"
 lang=" eng"/>
 <Card
 img={maki} 
 name="Maki" 
 quote="Een aap in een kostuum blijft nog altijd een aap!"
 theme="wisdom"
 lang=" nl"/>
 <Card
 img={kwal} 
 name="kwallen" 
 quote="Sommige mensen zijn net kwallen. zonder ruggegraat, 
 zonder hersenen en erg doorzichtig!"
 theme="funny"
 lang=" eng"/>
 <Card
 img={kwal} 
 name="kwallen" 
 quote="Sommige mensen zijn net kwallen. zonder ruggegraat, 
 zonder hersenen en erg doorzichtig!"
 theme="funny"
 lang=" eng"/>
 </div>
)
}