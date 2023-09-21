import imageDatas from "./ImageDatas";
import React, { useState, useEffect } from "react";

const Gallery = ({ searchTerm, searchImage}) => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setImages(imageDatas);
      setLoading(false);
    }, 2000);
  }, []);

  const handleDragStart = (e, index) => {
    e.dataTransfer.setData("imageIndex", index);
  };

  const handleDrop = (e, targetIndex) => {
    e.preventDefault();

    const sourceIndex = e.dataTransfer.getData("imageIndex");

    const updatedImages = [...images];
    const draggedImage = updatedImages.splice(sourceIndex, 1)[0];
    updatedImages.splice(targetIndex, 0, draggedImage);

    setImages(updatedImages);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <>
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 p-8">
      {loading && <h1>Loading</h1>}
      {!loading && searchTerm === "" ? ( 
      images.map((image, index) => (
        <div key={index} className="relative">
        <img
          src={image.url}
          alt={image.url}
          draggable={true}
          onDragStart={(e) => handleDragStart(e, index)}
          onDragOver={handleDragOver}
          onDrop={(e) => handleDrop(e, index)}
          className="w-[100%]  h-[150px] rounded-md object-cover cursor-pointer"
        />
        <span className="bg-white px-1 rounded absolute top-2 left-2">{image.tag}</span>
        </div>
      ))) : (
        searchImage.map((image, index) => (
          <div key={index} className="relative">
          <img
            src={image.url}
            alt={image.url}
            draggable={true}
            onDragStart={(e) => handleDragStart(e, index)}
            onDragOver={handleDragOver}
            onDrop={(e) => handleDrop(e, index)}
            className="w-[100%]  h-[150px] rounded-md object-cover cursor-pointer"
          />
          <span className="bg-white px-1 rounded absolute top-2 left-2">{image.tag}</span>
          </div>
        ))
      )}
    </div>
    </>
  );
};

export default Gallery;
