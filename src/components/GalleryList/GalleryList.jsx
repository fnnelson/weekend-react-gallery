import React from 'react';
import GalleryItem from './GalleryItem/GalleryItem';

function GalleryList({ galleryListProp }, { getGalleryProp1 }) {
    return (
        <div className="art-gallery">
            {galleryListProp.map(art => (
                <div key={art.id} className='art-item'>
                    <GalleryItem art={art} getGalleryProp2={getGalleryProp1}/>
                </div>
            ))}
        </div>
    )
}

export default GalleryList;


