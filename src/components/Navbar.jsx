import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { GiFairyWand } from 'react-icons/gi';
import { FiSearch } from 'react-icons/fi';

const Navbar = ({searchTerm, setSearchTerm, user }) => {

const navigate = useNavigate();


  if (user) {
  return (
    <div className='flex gap-2 md:gap-5 w-full mt-5 pd-7 pb-2 '>
      <div className='flex justify-start items-center w-full px-2 rounded-md bg-white border-none outline-none focus-within:shadow-sm'>

      <FiSearch  fontSize={21} className=" ml-1" />
      <input
            type="text"
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search..."
            value={searchTerm}
            // onFocus={() => navigate('/search')}
            className="p-2 w-full bg-white outline-none"
          />
          <button 
          className ="bg-blue-500 text-white rounded-full px-5 py-1 text-base outline-none"
          onClick={() => navigate('/search')}

          >
            Search
          </button>
      </div>
      <div className='flex gap-3'> 
      <Link to={`user-profile/${user?._id}`} className="hidden md:block">
      <img src={user.image} alt="user-image" className='w-14 h-12 rounded-lg' />
      </Link>

      <Link to='/create-pin' className="bg-black text-white rounded-lg w-12 h-12 md:w-14 md:h-12 flex justify-center items-center">
      <GiFairyWand />
      </Link>
      </div>

    </div>
  )
}
return null;
}

export default Navbar