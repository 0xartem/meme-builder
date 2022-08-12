import React from "react"
import memesData from "../memesData.js"

export default function Meme() {

    const getRandomMeme = () => {
        const rn = Math.floor(Math.random() * allMemeImages.data.memes.length);
        console.log(allMemeImages.data.memes[rn].url);
        return allMemeImages.data.memes[rn].url;
    }

    const [allMemeImages, setAllMemeImages] = React.useState(memesData);
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: getRandomMeme()
    });

    const updateMeme = () => {
        setMeme({
            ...meme,
            randomImage: getRandomMeme()
        })
    }
    return (
        <main>
            <div className="form">
                <input 
                    id="topText"
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                />
                <input 
                    id="bottomText"
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                />
                <button 
                    className="form--button"
                    onClick={updateMeme}
                >
                    Get a new meme image 🖼
                </button>
            </div>
            <img src={meme.randomImage} className="meme--image"></img>
        </main>
    )
}