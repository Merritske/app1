//import memesData from "./memesData"
import React, { useEffect, useState } from "react"

export default function MemInput(){
    //   const [images, setImages] = useState("https://i.imgflip.com/1bij.jpg")
    const [meme, setMeme] = useState({
     bottomText : "",
 topText : "" ,
    })
    const [allMemes, setAllMemes] = useState([])
    useEffect(()=>{
                fetch("https://api.imgflip.com/get_memes")
.then(res => res.json())
.then(data => setAllMemes(data.data.memes))
    },[] )


     function handleClick(e){
         
         e.preventDefault()

    const randomNum = Math.floor(Math.random()* allMemes.length)
let url = allMemes[randomNum].url

 setMeme(prevMeme =>({
     ...prevMeme,
     randomImage : url
     
 }) )
   
     }
 function handleChange(event){
     const {name, value} = event.target
     setMeme(prevMeme =>({
         ...prevMeme,
         [name] : value
     }))
 }
     
     return(
         <div className="form">
             
                 <input 
                 type="text"
                 placeholder="Top text"
                 className="form--input" 
                 name="topText"
                 value ={meme.topText}
                 onChange={handleChange}
                 />
                 <input type="text"
                 placeholder="Bottom text"
                 className="form--input" 
                 name="bottomText"
                 value={meme.bottomText}
                 onChange={handleChange}
                 />
                 <button className="form--button" onClick={handleClick} >Click</button>
 <div className="meme">
 <img src={meme.randomImage} alt="meme" className="meme-image"/>
 <h2 className="meme-top">{meme.topText}</h2>
 <h2 className="meme-bottom">{meme.bottomText}</h2>
 </div>
         </div>
     )
 }

// export default function MemInput(){
//    let url
// //  const [ result, setResult] = useState("click me")
//      const memeArray = memesData.data
//      const [images, SetImages] = useState(url)
//     function handleClick(e){
//         e.preventDefault()
  
//        const randomNum = Math.floor(Math.random()* memeArray.length)
//        url = memeArray[randomNum].image
// //    setResult("hit me one more time")
// SetImages( memeArray.push(url))
  
//     }

    
//     return(
//         <div className="form">
            
//                 <input 
//                 type="text"
//                 placeholder="Top text"
//                 className="form--input" />
//                 <input type="text"
//                 placeholder="Bottom text"
//                 className="form--input" />
//                 <button className="form--button" onClick={handleClick} >{result}</button>



//         </div>
//     )
// }