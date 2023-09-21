import { signOut } from "firebase/auth";
import { database } from "../firebase/config";
import { useNavigate } from "react-router-dom";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Gallery from "./Gallery";
import NavBar from "./NavBar";
import SideBar from "./SideBar";
import { useState, useEffect } from "react";
import imageDatas from "./ImageDatas";

const Dashboard = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    const handleClick = ()=> {
        signOut(database).then(val => {
            navigate('/')
        })
    }

    useEffect(() => {
      setTimeout(() => {
        setImages(imageDatas);
        setLoading(false);
      }, 2000);
    }, []);

    // const filteredImages = images.filter((image) => {
    //   image.tag && image.tag.some((tag) =>
    //     tag.toLowerCase().includes(searchTerm.toLowerCase())
    //   )
    // });

  return (
    <div className="flex justify-start items-start h-screen">
        <SideBar  handleClick={handleClick}/>
        <div className="w-full">
          <NavBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} handleClick={handleClick} />
          <DndProvider backend={HTML5Backend}>
            <Gallery imageDatas={images} loading={loading} searchTerm={searchTerm} />
          </DndProvider>
        </div>
    </div>
  )
}

export default Dashboard