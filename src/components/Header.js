import React from 'react'
import { auth } from '../utils/firebase';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';


const Header = () => {

  const navigate = useNavigate()

  // Subscribing to the Redux store
  const user = useSelector(store =>store.user)

  // function for handling sign out  
  const handleSignOut =()=>{

      signOut(auth).then(() => {

      // if successfully signed out, send user to default page
      navigate("/")

    }).catch((error) => {
      
      // if  sign out is not successful, send user to error page

      navigate("/error")
    });
  }

  return (
    <div className='flex absolute bg-gradient bg-gradient-to-b from-black z-10 w-screen items-center justify-between'>
        <img 
            className='w-28 mx-8 '
            src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png'      
            alt='netflix-logo'
        />
        {user && <div className='mr-3 flex items-center text-xs gap-x-2'>
          <h4 className='text-xs'>Hi  {user?.displayName}</h4>
          <img 
            className='w-8 h-8 rounded-2xl '
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