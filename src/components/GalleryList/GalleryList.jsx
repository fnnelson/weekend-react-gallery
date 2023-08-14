import React from 'react';
import GalleryItem from './GalleryItem/GalleryItem';

function GalleryList({ galleryListProp , getGallery }) {
    return (
        <div className="art-gallery">
            {galleryListProp.map(art => (
                <div key={art.id} className='art-item'>
                    <GalleryItem art={art} getGallery={getGallery} />
                </div>
            ))}
        </div>
    )
}

export default GalleryList;


