import React from 'react';
import './index.css';
import imageData from './imagen.json';

function App() {
  return (
    <div>
      <h1>Imágenes</h1>
      <div className="image-container">
        {imageData.map((image) => (
          <div key={image.id}>
            {/* Usar rutas relativas para cargar las imágenes */}
            <img src={image.url} alt={image.alt} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
