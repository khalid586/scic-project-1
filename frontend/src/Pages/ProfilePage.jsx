import React, { useContext, useEffect, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
import { AuthContext } from '../Providers/AuthProvider';
import Spinner from '../Components/Spinner';
import { Helmet } from 'react-helmet';



function ProfilePage() {
    const {user,loading,logOut} = useContext(AuthContext);
    const [imgAvailable,setImgAvailable] = useState(true);
    const [url,setUrl]= useState('');
    const [invalidImage,setInvalidImage] = useState(false);

    useEffect(()=>{
        if(user.photoURL){
            setUrl(user?.photoURL);
            setInvalidImage(false);
        }
    },[loading])

    function defaultImage(){
        if(!loading){            
            setInvalidImage(true);
            setUrl('https://img.freepik.com/free-vector/illustration-businessman_53876-5856.jpg?size=626&ext=jpg&ga=GA1.1.2082370165.1715904000&semt=ais_user')
        }
    }

    function handleError(){
        setImgAvailable(false);
    }

    function handleLogout(){
        toast.success('Logged out successfully')
        setTimeout(()=>{
            logOut();
        },1700)
    }

    return(
        <div>
        <Helmet>
            <title>Books Buy | User profile</title>
        </Helmet>
        {
            loading ? <Spinner></Spinner> : 
            <div >
                {
                    user ? 
                    <div className=' m-4 rounded-2xl text-center my-8'>
                            <div className='flex justify-center'>
                                <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                        <div class="flex flex-col items-center py-10 pt-14">
                                            <p className='relative'>
                                                <img onError={defaultImage} class="bg-white w-24  h-24 mb-3 rounded-full border-4 border-green-500 shadow-lg" src={url} alt="User"/>
                                                {
                                                   invalidImage && <sup className='absolute w-5/6 font-semibold text-xs text-white bg-red-500  p-1  rounded-full mx-2 '>Invalid URL </sup>
                                                }
                                            </p>
                                            
                                            <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">{user.displayName}</h5>
                                            <span class="text-sm text-gray-500 dark:text-gray-400">{user.email}</span>
                                            <div class="flex">
                                                {/* <a href="#" class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add friend</a>
                                                <a href="#" class="py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Message</a> */}
                                            </div>
                                        </div>
                                        <button className='mb-8 btn2' onClick={handleLogout}> Logout</button>
                                </div>
                            </div>
                    </div> 
                    
                    :

                    <p><Navigate to = '/'></Navigate></p>
                }
            </div>
        }
        <ToastContainer></ToastContainer>

        </div>
    )
}

export default ProfilePage