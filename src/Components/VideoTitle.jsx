  import React from 'react'
  
  const VideoTitle = ({title , overview}) => {
    return (
      <div className="pt-45 px-12 h-screen pb-10 absolute   from-black to-transparent ">
        <h1 className='font-bold text-3xl text-white'>{title}</h1>
        <p className='py-5 text-lg w-1/3 text-white hidden md:block'>{overview}</p>
         <div className=''>
            <button className='bg-white text-black rounded px-4 py-2 mr-3 text-xl hover:bg-gray-200'><span>▶️</span>Play</button>
            <button className='bg-gray-400 text-white rounded px-4 py-2 mr-3 text-xl'><span>ℹ️</span>More Info</button>
             
         </div>
      </div>
    )
  } 
  
  export default VideoTitle