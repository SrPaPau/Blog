import React from 'react';
import './estilosGaleria.css'; // Asegúrate de tener los estilos CSS si es necesario

// Define un objeto que mapea carpetas a imágenes
const imageMappings = {
  Proyecto1: require.context('../../assets/galerias/Proyecto1', false, /\.(jpg|jpeg|png)$/),
  Proyecto2: require.context('../../assets/galerias/Proyecto2', false, /\.(jpg|jpeg|png)$/),
};

const Galeria = ({ datos , onButtonClick}) => {
  // Carga las imágenes de la carpeta especificada en `datos`
  const getImages = (folder) => {
    const requireContext = imageMappings[folder];
    if (!requireContext) {
      console.error(`No se encontró la carpeta para: ${folder}`);
      return [];
    }
    return requireContext.keys().map(requireContext);
  };

  const images = getImages(datos);

  return (
    <div>
      <div className="divBotonInicio">
        <button className="botonInicio" onClick={onButtonClick}>Volver a mis proyectos</button>
      </div>
      <div className="divSuperiorGaleria">
        
        {images.length > 0 ? (
          images.map((image, index) => (
            <div className="image-item" key={index}>
              <img src={image} alt={`Gallery ${index}`} className="imagenGaleria"/>
            </div>
          ))
        ) : (
          <p>No hay imágenes para mostrar.</p>
        )}
      </div>
      
    </div>
  );
};

export default Galeria;