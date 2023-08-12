import { useState, useEffect } from 'react';
import React from 'react';
import axios from 'axios';
import './App.css';

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
      <header className="App-header">
        <h1 className="App-title">Gallery of My Life</h1>
      </header>
      <div className="art-gallery">
        {artGalleryList.map(art => (
          <div key={art.id}>
            <img src={art.path} alt={art.description}/>
            <p>{art.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
