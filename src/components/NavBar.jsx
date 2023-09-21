import { Link } from 'react-router-dom'
import { HiMenuAlt3 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import { MdDashboard, MdFeedback, MdPhotoLibrary, MdLogout } from "react-icons/md";
import { useState } from 'react';

const NavBar = ({searchTerm, setSearchTerm, handleClick, getUser}) => {
  const [menu, setMenu] = useState(false);

  return (
    <header className='text-teal-900 h-[100px] border-b-2 px-10 flex justify-between items-center'>
      <h1 className='text-2xl font-bold lg:hidden'><span className='text-rose-900 '>D&D</span>Gallery</h1>
      {!menu && <HiMenuAlt3 className='lg:hidden text-2xl cursor-pointer' onClick={() => setMenu(!menu)}/>}
      {menu && <IoMdClose className='lg:hidden text-2xl cursor-pointer' onClick={() => setMenu(!menu)} />}
        <div className='hidden w-full lg:flex justify-between items-center h-full'> 
            <h1 className='text-[35px]'>Dashboard</h1>
            <div>
              <Link className='text-xl p-[30px] border-b-[5px] border-teal-900 hover:border-rose-700'>My Photo</Link>
              <Link className='text-xl p-[30px] border-b-[5px] border-teal-900 hover:border-rose-700'>Feed</Link>
            </div>
            <input 
            type="text" 
            placeholder='Search images by tag' 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className='border-[1px] border-teal-900 shadow-md shadow-teal-400 rounded-3xl px-4 py-1 outline-0'
            />
        </div>
        {/* ======= SideBar ======== */}
        <div className={menu ? "flex bg-white text-teal-900 w-[200px] border-r-2 h-full justify-between items-start flex-col font-bold p-5 pt-8 fixed top-0 left-0 z-10" : 'hidden'}>
        <div>
            <h1 className='text-2xl font-bold mb-11'><span className='text-rose-900 '>D&D</span>Gallery</h1>
            <div className="flex justify-center items-start flex-col border-y-2 gap-y-5 py-5">
              <h3 className="text-xl flex justify-center items-center gap-2.5"><MdDashboard className="text-rose-700" />Dashboard</h3>
              <nav className="flex justify-center items-start flex-col">
                  <Link className="justify-self-end flex justify-center items-center gap-x-2.5"><MdPhotoLibrary className="text-rose-700" />My Photo</Link>
                  <Link className="justify-self-end flex justify-center items-center gap-x-2.5"><MdFeedback className="text-rose-700" />Feed</Link>
              </nav>
            </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-4">
        <input 
            type="text" 
            placeholder='Search' 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className='border-[1px] border-teal-900 shadow-md shadow-teal-400 rounded-3xl px-4 py-1 w-[80%] outline-0'
        />
        <div className="border-[2px] grid place-items-center py-3 px-10 rounded-md">
            <div className="w-[55px] h-[55px] rounded-full bg-teal-800 text-white grid place-items-center text-2xl shadow-lg shadow-rose-700">{getUser}</div>
            <span className="border-t-[1px] border-rose-700 mt-5 font-thin">User</span>
          </div>
        <span className="items-self-end flex justify-center items-center gap-2.5 cursor-pointer" onClick={handleClick}><MdLogout className="text-rose-700" />Log Out</span>
        </div>
    </div>
    </header>
  )
}

export default NavBar