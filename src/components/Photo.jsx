// import { type } from "@testing-library/user-event/dist/type"
import { useDrag } from "react-dnd"

const Photo = ({image, tag, id}) => {
    const [{isDragging}, drag] = useDrag(()=>({
        type: 'image',
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging()
        }),
    }));

  return (
    <div key={id}>
     <img ref={drag} src={image} alt={image} className="w-[100%] md:w-[200px] h-[150px] rounded-md object-cover" style={{border: isDragging ? '2px dashed red' : '0px'}} />
    </div>
  )
}

export default Photo