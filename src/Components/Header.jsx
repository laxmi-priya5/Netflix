import React from 'react'
import { useState } from 'react'
const Header = () => {
   const [language , setLanguage] = useState("English")
  return (   
    <div className=' px-8 py-2 absolute z-20 flex justify-between w-full items-center '>
        <div className='w-24 sm:w-34 md:w-44'><img src='https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-12-03/consent/87b6a5c0-0104-4e96-a291-092c11350111/019ae4b5-d8fb-7693-90ba-7a61d24a8837/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png' alt='netflix-logo'/></div>
        {/* <div className='flex gap-4'>
        <select className='text-white border px-3 py-1 border-gray-300 rounded bg-black/60 ' value={language} onChange={(e)=>setLanguage(e.target.value)}>
            <option>English</option>
            <option>Hindi</option>
        </select>
        <button className='text-white border px-3 py-1 border-red-700 rounded bg-red-700 '>Sign In</button>
        </div> */}
    </div>
  )
}

export default Header