import React, { useRef, useState } from 'react'
import {checkValidData}  from '../utils/validate'
import {  createUserWithEmailAndPassword,signInWithEmailAndPassword ,updateProfile } from "firebase/auth";
import {auth} from '../utils/firebase'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
const Login = () => {
    const [isLoggedIn , setIsLoggedIn] = useState(true)
    const [err , setErr] = useState("");
    const email = useRef(null);
    const password = useRef(null);
    const name = useRef(null);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleClick = (e)=>{
        e.preventDefault()
        const msg =checkValidData(email.current.value, password.current.value)
        setErr(msg);

        if(msg) return;

        if(!isLoggedIn){ 
            // signup
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                console.log(user)
                updateProfile(auth.currentUser, {
                displayName: name.current.value
                }).then(() => {
                // Profile updated!
                    console.log(auth.displayName)
                    dispatch(addUser(auth.displayName))
                    navigate('/browse')
                }).catch((error) => {
                // An error occurred
                console.log(err.message)
                });
                
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErr(errorCode+" "+errorMessage)
            });

        }
        else{  // login
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                 navigate('/browse')
                
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErr(errorCode+" "+errorMessage)
            });


        }
    }
  return (
    <div className=''>
        <div className='h-screen w-full'><img className='h-full w-full object-cover ' src='https://assets.nflxext.com/ffe/siteui/vlv3/9ddb442a-aca7-4d85-9cd1-dbed62f18f26/web/IN-en-20251222-TRIFECTA-perspective_a882efaa-75c8-4143-9dc1-4f9932a791ac_medium.jpg' alt='bg-logo'/></div>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className='absolute z-10 flex items-center  justify-center inset-0'>
            <form className='bg-black/70 p-10 text-white w-full max-w-sm' >
                <h2 className='font-bold mb-5 text-3xl p-2'>{isLoggedIn ? 'Sign In' : 'Sign up'}</h2>
                {!isLoggedIn && 
                <input type='text' placeholder='Enter Name' ref={name} className='p-2 m-2 w-full text-white border rounded '/>
                
                }
                <input type='text' placeholder='Enter Email'ref={email} className='p-2 m-2 w-full text-white border rounded '/>
                <input type='password' placeholder='Enter Password' ref={password} className='p-2 m-2 w-full text-white border rounded ' />
                {err&&<p className='text-red-500 p-2'>{err}</p>} 
                <button className='p-2 mx-2 my-4 w-full text-white border rounded bg-red-700 border-red-600 font-bold cursor-pointer' onClick={(e)=>handleClick(e)}>{isLoggedIn ? 'Sign In' : 'Sign up'} </button>
                
                {isLoggedIn && <div className='text-center'>Don't  Have an account?<h2 className='font-bold cursor-pointer' onClick={()=>setIsLoggedIn(false)}>Sign up now</h2></div>}
                 
            </form>
        </div>

    </div>
  )
}

export default Login