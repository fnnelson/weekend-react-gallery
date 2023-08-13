import react, { useState } from "react";

function GalleryItem({ art }, { isClicked }) {

    const [showDescription, setShowDescription] = useState(false);

    let flipSide = () => {
        setShowDescription(!showDescription)
        // { console.log(showDescription) }
    }

    return (
        // div to house either the image or the description. when div is clicked, it will flip the boolean for showDescription.  Using ternary operator to display image if showDescription is false and the description if showDescription is true
        <>
            <div onClick={flipSide} className="frame">
                {showDescription ? <p>{art.description}</p> : <img src={art.path} alt={art.description} />}
            </div>
            <button>Like</button>
            <p>No people like this!</p>
        </>
    )
}

export default GalleryItem;