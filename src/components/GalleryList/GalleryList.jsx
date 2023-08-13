import React from 'react';
import GalleryItem from './GalleryItem/GalleryItem';

function GalleryList({ galleryListProp }) {
    return (
        <div className="art-gallery">
            {galleryListProp.map(art => (
                <div key={art.id} className='art-item'>
                    <GalleryItem art={art}/>
                </div>
            ))}
        </div>
    )
}

export default GalleryList;


