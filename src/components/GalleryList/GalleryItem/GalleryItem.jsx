import react, { useState } from "react";
import axios from "axios";

function GalleryItem({ art, getGallery }) {

    const [showDescription, setShowDescription] = useState(false);

    let flipSide = () => {
        // flips the showDescription state of this item
        setShowDescription(!showDescription)
        // { console.log(showDescription) }
    }

    let likeCounter = () => {
        // console.log("current likes:", likeCount)
        axios.put(`/gallery/like/${art.id}`)
            .then(response => {
                console.log("response from PUT:", response)
                {getGallery()}
            })
            .catch(error => {
                console.log("error on PUT:", error)
            })
    }

    return (
        // div to house either the image or the description. when div is clicked, it will flip the boolean for showDescription.  Using ternary operator to display image if showDescription is false and the description if showDescription is true
        <>
            <div onClick={flipSide} className="frame">
                {showDescription ? <p>{art.description}</p> : <img src={art.path} alt={art.description} />}
            </div>
            <button onClick={likeCounter}>Like ❤️</button>
            <p>{art.likes == 0 ? "NO people like" : art.likes == 1 ? `${art.likes} person likes` : `${art.likes} people like`} this!</p>
        </>
    )
}

export default GalleryItem;