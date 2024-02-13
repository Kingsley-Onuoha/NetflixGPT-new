import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidData } from '../utils/validate'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { updateProfile } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice'

const Login = () => {

    const navigate = useNavigate()

    const [isSignInForm, setIsSignInForm] = useState(true)

    const [errorMessage, setErrorMessage] = useState(null)

    const dispatch = useDispatch()

    const name = useRef(null)

    const email = useRef(null)

    const password = useRef(null)

    const toggleSignInForm = ()=> {
        setIsSignInForm(!isSignInForm)
    }

    const handleButtonClick = ()=>{

    // Validate the form

     const message = checkValidData(email.current.value, password.current.value)

     setErrorMessage(message)

     //Proceed to Sign in or Sign Out after passing validation

     if(message == null){
        // Sign Up Logic from firebase doc
        if(!isSignInForm){
            createUserWithEmailAndPassword(
                auth, 
                email.current.value, 
                password.current.value
            )
            .then((userCredential) => {
                    const user = userCredential.user;
                    // Update user logic
                    updateProfile(auth.currentUser, {
                        displayName: name.current.value, photoURL: "https://avatars.githubusercontent.com/u/107959364?v=4"
                      }).then(() => {
                        //Update our Redux store
                        
                        const {uid, email, displayName, photoURL}= auth.currentUser;

                        dispatch (
                            addUser({
                            uid:uid,
                            email:email,
                            displayName:displayName,
                            photoURL: photoURL,
                        }))

                        navigate("/browse")
                      }).catch((error) => {
                        setErrorMessage( errorMessage)
                      });
            })
            .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + "-" + errorMessage)
            });
           
        }
        
        // Sign In Logic from firebase doc
        else{
            signInWithEmailAndPassword(
                auth, 
                email.current.value, 
                password.current.value
            )
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user)
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage(errorCode + "-" + errorMessage)
            });

             // if Sign Up is successful, navigate to browse page
             navigate("/browse")
        }
     }

    }

  return (
    <div>
        <Header />
        <div className='absolute '>
            <img 
                className='bg-gradient-to-b from-black'
                src='https://assets.nflxext.com/ffe/siteui/vlv3/4da5d2b1-1b22-498d-90c0-4d86701dffcc/ea4e3067-609b-4f51-a5ae-88663802fbfc/NG-en-20240129-popsignuptwoweeks-perspective_alpha_website_medium.jpg'
                alt='background-img'
            />
        </div>
        <form className=' absolute px-5 p-2 bg-black bg-opacity-80 w-1/3 my-12 mx-auto right-0 left-0 text-white' onSubmit={(e)=> e.preventDefault()}>
            <div className=' p-2 items-center justify-center'>
                <h1 className='font-bold text-sm my-2'>{ isSignInForm? 'Sign In' : 'Sign Up'}</h1>
                {!isSignInForm && (<input
                    ref={name}
                    type='text' 
                    placeholder='Full Name (Surname, First Name)'
                    className='py-1 px-1 w-full text-xs font-thin my-2 text-white bg-slate-900 border border-white rounded' 
                />)}
                <input 
                    ref={email}
                    type='text' 
                    placeholder='Email Address'
                    className='py-1 px-1 w-full text-xs font-thin my-2 text-white bg-slate-900 border border-white rounded' 
                /> 
                <input 
                    ref={password}  
                    type='password' 
                    placeholder='Password'
                    className='my-2 p-1 px-2 w-full text-xs font-thin text-white bg-slate-900  border border-white rounded' 
                />
                <p className='text-xs text-red-500'>{errorMessage}</p>
                <button className='my-2 p-1 text-xs bg-red-600 w-full font-thin rounded 'onClick={handleButtonClick}>
                { isSignInForm? 'Sign In' : 'Sign Up'}
                </button>
                <span className='text-xs flex flex-row my-2'>
                    <p>{isSignInForm? "New to Netflix?": "Already Registered?"}</p>
                    <p className='mx-2  cursor-pointer hover:underline underline-offset-4' onClick={toggleSignInForm}>{isSignInForm? "Sign up Now": "Sign In Now"}</p>
                </span>
            </div>
        </form>
    </div>
  )
}

export default Login