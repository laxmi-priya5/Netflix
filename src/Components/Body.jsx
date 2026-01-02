import React, { useEffect } from 'react'
import Login from './Login'
import Browse from './Browse'
import Header from './Header'
import { Outlet, useNavigate } from 'react-router-dom'
import {  onAuthStateChanged } from "firebase/auth";
import { auth } from '../utils/firebase'
import { useDispatch } from 'react-redux'
import { addUser, removeUser } from '../utils/userSlice'

const Body = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, 
      console.log(user)
      const { uid , email , displayName} = user;
      dispatch(addUser({uid , email , displayName}))
      
    } else {
      // User is signed out
      
      
      dispatch(removeUser());
    }
  },[]);
  })
  return (
    <div className='relative'>
        <Header />
  
        <Outlet/>
        {/* <Browse/> */}
    </div>
  )
}

export default Body