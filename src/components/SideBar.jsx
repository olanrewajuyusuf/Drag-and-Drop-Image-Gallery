import { MdDashboard, MdFeedback, MdPhotoLibrary, MdLogout } from "react-icons/md";
import { Link } from 'react-router-dom'

const SideBar = ({ handleClick }) => {
  return (
    <div className="hidden bg-white text-teal-900 w-[200px] border-r-2 h-full lg:flex justify-between items-start flex-col font-bold p-5 pt-8">
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
        <span className="items-self-end flex justify-center items-center gap-2.5 cursor-pointer" onClick={handleClick}><MdLogout className="text-rose-700" />Log Out</span>
    </div>
  )
}

export default SideBar