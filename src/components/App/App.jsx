import { useState, useEffect } from 'react';
import React from 'react';
import axios from 'axios';
import './App.css';
import Header from '../Header/Header';
import GalleryList from '../GalleryList/GalleryList';

function App() {

  let [artGalleryList, setArtGalleryList] = useState([]);

  const getGallery = () => {
    axios.get('/gallery')
      .then(response => {
        console.log("response.data received in GET /gallery", response.data)
        setArtGalleryList(response.data)
      })
      .catch(error => {
        console.log("error with GET", error)
      })
  }

  useEffect(() => {
    getGallery();
  }, [])

  return (
    <div className="App">
      <Header />
      <GalleryList galleryListProp={artGalleryList} getGalleryProp1={getGallery} />

    </div>
  );
}

export default App;


