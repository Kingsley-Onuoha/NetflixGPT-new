import React from 'react'
import { auth } from '../utils/firebase';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from '../utils/userSlice'
import { netflixIcon } from '../utils/constants';


const Header = () => {

  const navigate = useNavigate()

  const dispatch = useDispatch()

  // Subscribing to the Redux store
  const user = useSelector(store =>store.user)

  //This Auth updates the redux story at every render
  useEffect (()=>{
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        
        const {uid, email, displayName, photoURL}= user;

        dispatch (
          addUser({
          uid:uid,
          email:email,
          displayName:displayName,
          photoURL: photoURL,
        }))
        navigate("/browse")
      } else {

        dispatch(removeUser())
        navigate("/")
      }
    });
    // unsubscribe, whenever our component unmounts
    return () => unsubscribe()
  }, [])


  // function for handling sign out  
  const handleSignOut =()=>{

      signOut(auth).then(() => {

    }).catch((error) => {
      
      // if  sign out is not successful, send user to error page

      navigate("/error")
    });
  }

  return (
    <div className='flex absolute bg-gradient bg-gradient-to-b from-black z-10 w-screen items-center justify-between'>
        <img 
            className='w-28 mx-8 '
            src={netflixIcon}     
            alt='netflix-logo'
        />
        {user && <div className='mr-3 flex items-center text-xs gap-x-2 text-gray-300 bg-black'>
          <h4 className='text-xs'>Hi  {user?.displayName}</h4>
          <img 
            className='w-7 h-7 rounded-xl '
            src={user?.photoURL}
            alt='userIcon'
          />
          <button
          onClick={handleSignOut}
          className='text-xs cursor-pointer bg-red-700 rounded-lg px-2 py-0.5 text-gray-300'
          >
            Sign Out
          </button>
        </div>}
    </div>
  )
}

export default Header