import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
const Home = () => {
    const [language , setLanguage] = useState("English")
  return (
    <div className=''>
        <div className='h-screen w-full'><img className='h-full w-full object-cover ' src='https://assets.nflxext.com/ffe/siteui/vlv3/9ddb442a-aca7-4d85-9cd1-dbed62f18f26/web/IN-en-20251222-TRIFECTA-perspective_a882efaa-75c8-4143-9dc1-4f9932a791ac_medium.jpg' alt='bg-logo'/></div>
        <div className="absolute inset-0 bg-black/80"></div>
        <div className='absolute z-20 flex gap-5 right-36 top-10'>
         <select className='text-white border px-3 py-1 border-gray-300 rounded bg-black/60 ' value={language} onChange={(e)=>setLanguage(e.target.value)}>
            <option>English</option>
            <option>Hindi</option>
        </select> 
        <Link to='/login'> <button className='text-white border px-3 py-1 border-red-700 rounded bg-red-700 cursor-pointer '>Sign In</button></Link>
 
        </div>

    </div>
  )
}

export default Home