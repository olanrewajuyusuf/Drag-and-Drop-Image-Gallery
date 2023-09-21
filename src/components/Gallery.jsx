import imageDatas from "./ImageDatas";
import React, { useState, useEffect } from "react";

const Gallery = ({ searchTerm, searchImage}) => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [draggedIndex, setDraggedIndex] = useState(null);
  const [dropTargetIndex, setDropTargetIndex] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setImages(imageDatas);
      setLoading(false);
    }, 2000);
  }, []);

  const handleDragStart = (e, index) => {
    e.dataTransfer.setData("imageIndex", index);
    setDraggedIndex(index);
  };

  const handleDragEnd = () => {
    setDraggedIndex(null);
    setDropTargetIndex(null);
  };

  const handleDragOver = (e, index) => {
    e.preventDefault();
    setDropTargetIndex(index);
  };

  const handleDrop = (e, targetIndex) => {
    e.preventDefault();

    const sourceIndex = e.dataTransfer.getData("imageIndex");

    if (sourceIndex !== targetIndex) {
      // Perform image reordering
      const updatedImages = [...images];
      const draggedImage = updatedImages.splice(sourceIndex, 1)[0];
      updatedImages.splice(targetIndex, 0, draggedImage);

      setImages(updatedImages);
    }

    setDraggedIndex(null);
    setDropTargetIndex(null);
  };

  const isBeingDragged = (index) => index === draggedIndex;
  const isDropTarget = (index) => index === dropTargetIndex;

  return (
    <>
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 px-[10px] py-10 md:px-10">
      {loading && (
      <div className="grid place-items-center">
        <div className="loader"></div>
        <p className="text-xl">Loading...</p>
      </div>
      )}
      {!loading && searchTerm === "" ? ( 
      images.map((image, index) => (
        <div key={index} className="relative">
        <img
          src={image.url}
          alt={image.url}
          draggable={true}
          onDragStart={(e) => handleDragStart(e, index)}
          onDragEnd={handleDragEnd}
          onDragOver={(e) => handleDragOver(e, index)}
          onDrop={(e) => handleDrop(e, index)}
          className={`image ${isBeingDragged(index) ? "dragging" : ""} ${isDropTarget(index) ? "drop-target" : ""}`}
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
            onDragEnd={handleDragEnd}
            onDragOver={(e) => handleDragOver(e, index)}
            onDrop={(e) => handleDrop(e, index)}
            className={`image ${isBeingDragged(index) ? "dragging" : ""}, ${isDropTarget(index) ? "drop-target" : ""}`}
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
