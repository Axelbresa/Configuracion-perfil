import { useState, useEffect } from 'react';
import './index.css';

function App() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch('/imagen.json'); // Ruta relativa al JSON
        if (response.ok) {
          const data = await response.json();
          setImages(data);
        } else {
          throw new Error('Error fetching images');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchImages();
  }, []);

  return (
    <div>
      <h1>Imágenes</h1>
      <div className="image-container">
        {images.map((image) => (
          <img key={image.id} src={processImageURL(image.url)} alt={image.alt} />
        ))}
      </div>
    </div>
  );
}

function processImageURL(url) {
  // Si la URL comienza con "./" o "/" se asume que es relativa al directorio public
  if (url.startsWith('./') || url.startsWith('/')) {
    return `${process.env.PUBLIC_URL}${url}`;
  }
  return url;
}

export default App;
