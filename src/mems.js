import './App.css';
import memesData from "./memesData.js";
import React from "react";


function Main() {
    

    const [memeImage, setMemeImage] = React.useState("")

    function getMemeImage() {
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        setMemeImage(memesArray[randomNumber].url)
        
    }
 
    return (
        <main className='main'>
            <div className="form1">
                
                <input className="form-input" placeholder='toptext' type = "text" />
                <input className="form-input"  placeholder='bottomtext' type = "text" />
                <button className="form-button"  onClick={getMemeImage} > Get a new meme image 🖼</button>
            </div>
        
            <img src={memeImage} className="meme--image" alt = "bhavadeep"/>
        </main>
    );
  }
  
  export default Main;