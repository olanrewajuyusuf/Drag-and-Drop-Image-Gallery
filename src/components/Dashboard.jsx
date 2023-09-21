import { signOut } from "firebase/auth";
import { database } from "../firebase/config";
import { useNavigate } from "react-router-dom";
import Gallery from "./Gallery";
import NavBar from "./NavBar";
import SideBar from "./SideBar";
import { useState } from "react";
import imageDatas from "./ImageDatas";

const Dashboard = () => {
  const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    const handleClick = ()=> {
        signOut(database).then(val => {
            navigate('/')
        })
    }

    const filteredImage = (query) => {
      // Convert the query to lowercase for case-insensitive search
      const lowercaseQuery = query.toLowerCase();

      // Use the filter method to find matching items
      const results = imageDatas.filter(item => {
        // Check if images of the properties contains the query
        return (
          item.tag.toLowerCase().includes(lowercaseQuery)
        );
      });

      return results;
    }
    const searchImage = filteredImage(searchTerm);

  return (
    <div className="flex justify-start items-start h-screen">
        <SideBar  handleClick={handleClick}/>
        <div className="w-full">
          <NavBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} handleClick={handleClick} />
          <Gallery searchTerm={searchTerm} searchImage={searchImage} />
        </div>
    </div>
  )
}

export default Dashboard