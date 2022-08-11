import React from "react"
import memesData from "../memesData.js"

export default function Meme() {
    
    const getRandomMeme = () => {
        const rn = Math.floor(Math.random() * memesData.data.memes.length);
        console.log(memesData.data.memes[rn].url);
        return memesData.data.memes[rn].url;
    }
    const [state, setState] = React.useState(getRandomMeme());

    const updateState = () => {
        setState(getRandomMeme())
    }
    return (
        <main>
            <div className="form">
                <input 
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                />
                <input 
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                />
                <button 
                    className="form--button"
                    onClick={updateState}
                >
                    Get a new meme image 🖼
                </button>
            </div>
            <img src={state} className="meme--image"></img>
        </main>
    )
}