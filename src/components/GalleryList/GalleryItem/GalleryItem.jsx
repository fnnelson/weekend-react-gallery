import react from "react";

function GalleryItem({art}) {
    return (
        <>
            <img src={art.path} alt={art.description} />
            <p>{art.description}</p>
        </>
    )
}

export default GalleryItem;