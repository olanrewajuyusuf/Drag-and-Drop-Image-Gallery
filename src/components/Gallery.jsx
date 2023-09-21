import { useState } from "react"
import { useDrop } from "react-dnd"
import Photo from "./Photo"

const Gallery = ({imageDatas, loading, filteredImages, searchTerm}) => {
  const [board, setBoard] = useState([]);
  const [{isOver}, drop] = useDrop(()=>({
    accept: 'image',
    drop: (item) => addImageToBoard(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver()
    }),
  }));

  const addImageToBoard = (id) => {
    const images = imageDatas.filter(image => id === image.id);
    setBoard((board) => [...board,images[0]]);
  }

  return (
    <div className="flex flex-col md:flex-row justify-center md:items-start items-center gap-3 p-[30px]">
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
      {loading && <div className="loading-spinner">Loading...</div>}
        
      {!loading  && (
          imageDatas.map(image => {
              return (
                <div key={image.id} className="relative">
                  <Photo image={image.url} id={image.id} tag={image.tag} />
                  <span className="bg-white px-1 rounded absolute top-2 left-2">{image.tag}</span>
                </div>
              );
            })
        ) 
        // : (
        //   filteredImages.map((image) => (
        //     <div key={image.id} className="relative">
        //       <Photo image={image.url} id={image.id} tag={image.tag} />
        //       <span className="bg-white px-1 rounded absolute top-2 left-2">{image.tag}</span>
        //     </div>
        //   ) 
        //   ))
      }
    </div>
    <div ref={drop} className="w-[100%] md:w-[300px] h-[480px] bg-teal-400 border-2 rounded-lg">
        {board.map(image => {
          return (
            <div key={image.id} className="relative">
              <Photo image={image.url} id={image.id} tag={image.tag} />
              <span className="bg-white px-1 rounded absolute top-2 left-2">{image.tag}</span>
            </div>
          );
        })}
      </div>
    </div>
  )
}

export default Gallery

