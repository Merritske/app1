import memesData from "./memesData"
import React, { useState } from "react"

export default function MemInput(){
    //   const [images, setImages] = useState("https://i.imgflip.com/1bij.jpg")
    const [meme, setMeme] = useState({
     bottomText : "",
 topText : "" ,
randomImage: "https://i.imgflip.com/1bij.jpg"  
    })
    const [allMemes, setAllMemes] = useState(memesData)


     function handleClick(e){
         e.preventDefault()
    const memeArray = allMemes.data
    const randomNum = Math.floor(Math.random()* memeArray.length)
let url = memeArray[randomNum].image
 setMeme(prevMeme =>({
     ...prevMeme,
     randomImage : url
 }) )
   
     }
 
     
     return(
         <div className="form">
             
                 <input 
                 type="text"
                 placeholder="Top text"
                 className="form--input" />
                 <input type="text"
                 placeholder="Bottom text"
                 className="form--input" />
                 <button className="form--button" onClick={handleClick} >Click</button>
 
 <img src={meme.randomImage} alt="meme" className="meme-image"/>
 
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