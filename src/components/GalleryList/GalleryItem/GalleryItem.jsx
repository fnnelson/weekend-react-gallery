import react, { useState } from "react";
import axios from "axios";

function GalleryItem({ art }, { getGalleryProp2 }) {

    const [showDescription, setShowDescription] = useState(false);
    const [likeCount, setLikeCount] = useState(art.likes);

    let flipSide = () => {
        // flips the showDescription state of this item
        setShowDescription(!showDescription)
        // { console.log(showDescription) }
    }

    let likeCounter = () => {
        // console.log("current likes:", likeCount)
        setLikeCount(likeCount + 1);
        axios.put(`/gallery/like/${art.id}`, { likeCount })
            .then(response => {
                console.log("response from PUT:", response)
                { getGalleryProp2 };
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
            <p>{likeCount == 0 ? "NO people like" : likeCount == 1 ? `${likeCount} person likes` : `${likeCount} people like`} this!</p>
        </>
    )
}

export default GalleryItem;