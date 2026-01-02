import React, { useEffect , useState } from 'react'
import { OPTIONS } from '../utils/constants'
import { useTrailerId } from '../hooks/useTrailerId'
import { useSelector } from 'react-redux'
import {  signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { Navigate, useNavigate } from 'react-router-dom';

const VideoBackground = ({id}) => {
  const [showDropdown , setShowDropdown] = useState(false);
    // custom hooks to get trailer video
    const navigate = useNavigate();
    const trailerId = useSelector(store => store.movies?.trailerVideo)
    const user=useSelector(store=>store.user)
    useTrailerId(id);

    const handleShowDropdown = ()=>{
       setShowDropdown(prev=>!prev)
    }
    
    const handleSignout = ()=>{
      signOut(auth).then(() => {
        navigate('/')
      // Sign-out successful.
       
      }).catch((error) => {
        // An error happened.
      });
    }
    
  return (
    
     <div className='w-screen absolute inset-0 -mt-15 '>
         
         <iframe className='w-full h-full '  width="560" height="315" src={"https://www.youtube.com/embed/"+ trailerId?.key + "?autoplay=1&mute=1"} title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
         <div className='absolute z-20 flex gap-2 right-36 top-20 w-15 items-center'>
          <div className='' ><img src='https://wallpapers.com/images/high/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.webp' alt='login user'/></div>

          <div className='relative' >
            <img  src='https://icon-library.com/images/white-down-arrow-icon/white-down-arrow-icon-9.jpg' alt='dropdown' onClick={handleShowDropdown}/>   
            {showDropdown && <div className="absolute top-10 right-0 w-30 text-center text-white p-1 rounded shadow-lg bg-red-500">
              <p className='text-left  pb-2'>{user.displayName}</p>
              <p
                className="cursor-pointer text-left font-bold border border-red-600 rounded py-2 px-1"
                onClick={handleSignout}
              >
                Sign out
              </p>
            </div>
          
          }
          </div>
         </div>
         <div></div>
    </div>

  )
}

export default VideoBackground