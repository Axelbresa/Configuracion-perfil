import React from 'react'
import imageData from './imagen.json';

function Configuracion_Perfill() {
    return (
        <>
        <div>
        <h1>Imágenes</h1>
        <h2>Añadir foto de perfil</h2>  
        <div className="image-container">
                  
          {imageData.map((image) => (
            <div key={image.id}>
              {/* Usar rutas relativas para cargar las imágenes */}
              <img src={image.url} alt={image.alt} />
            </div>
          ))}
        
        </div>
        <button>Cancelar</button>
          <button>Añadir</button>
      </div>
      </>
    )
}

export default Configuracion_Perfill