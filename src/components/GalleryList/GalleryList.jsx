import React from 'react';

function GalleryList({galleryListProp}) {
    return <div className="art-gallery">
        {galleryListProp.map(art => (
            <div key={art.id} className='art-item'>
                <img src={art.path} alt={art.description} />
                <p>{art.description}</p>
            </div>
        ))}
    </div>;
}

export default GalleryList;