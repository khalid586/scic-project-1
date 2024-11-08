import React, { useContext, useState } from 'react'
import { AuthContext } from '../Providers/AuthProvider';
import Spinner from '../Components/Spinner';
import { Helmet } from 'react-helmet';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';


function AddHotel() {
    const [url,setUrl] = useState('https://i.ibb.co/r0d6F7Y/pexels-photo-3881104.jpg');
    const [error,setError] = useState(false);
    const {user,loading} = useContext(AuthContext);
    const navigate = useNavigate();



    function checkUrl(e){
        const currUrl = e.target.value;
        setUrl(currUrl); 
        setError(false)

    }
    function handleSubmit(e){
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photoUrl = form.photoUrl.value;
        const genre = form.genre.value;
        const description = form.description.value;
        const rooms = parseInt(form.rooms.value);
        const uploaderEmail = user?.email;
        const rentedBy = [];


        const data = {
            name,genre,photoUrl,description,rooms,uploaderEmail,rentedBy
        }

        axios.post('http://localhost:5007/add_Hotel',data)
        .then(res => res.data)
        .then((response)=>{
            if(response.acknowledged){
                toast.success('Hotel added successfully')
                setTimeout(()=>{
                    navigate('/')
                },1500)
            }
        })
        .catch(error => console.error(error))

        form.reset();
    }
  return (
    <div className='flex justify-center py-4'>
        <Helmet>
            <title>Hotel booking | Add Hotel</title>
        </Helmet>
        {
            loading? <Spinner></Spinner>
            :
            <form onSubmit={handleSubmit} className="min-w-80 mx-auto ">
                <h5 className='text-center my-4 mb-8 text-xl font-bold flex justify-center items-center gap-1'>
                    <img className='' src="hotelLogo.PNG" width={25} alt="" />
                    Hotel Details
                </h5>

                <img className='hidden' src={url} alt="alternate image" onError={() => setError(true)} />
                <div className="mb-5 flex gap-2">
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900">Hotel name</label>
                        <input type="text" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5  dark:focus:ring-green-500 dark:focus:border-green-500" placeholder="Ex: Psychology of Money" required />
                    </div>
                    
                    <div className="">
                        <label className="block mb-2 text-sm font-medium text-gray-900">Hotel Image Url</label>
                        <input onChange={checkUrl} type="text" name = 'photoUrl' id="photoUrl" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5  dark:focus:ring-green-500 dark:focus:border-green-500" placeholder="Ex: https://picture.png"  required />
                        <div className='h-5'>                            
                            { error && <p className='text-xs text-red-500'>Invalid url</p>}
                        </div>
                    </div>
                </div>
                <div className='flex gap-2'>
                    <div className="mb-5">
                        <label className="block mb-2 text-sm font-medium text-gray-900">Description</label>
                        <input type="text" id="description" name = "description" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5  dark:focus:ring-green-500 dark:focus:border-green-500" placeholder="Ex: John Doe" required />
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900">Available rooms</label>
                        <input type="number" name = 'rooms' id="rooms" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5  dark:focus:ring-green-500 dark:focus:border-green-500" placeholder="Ex: 10" min="1"   required />
                    </div>
                </div>


                {/* <div className="mb-5">
    
                    <div className="">
                    <label htmlFor="rating" className="block mb-2 text-sm font-medium text-gray-900">Rating</label>
                        <input type="number" name = 'rating' id="rating" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5  dark:focus:ring-green-500 dark:focus:border-green-500" placeholder="Ex: 4" min="1" max="5" required />
                    </div>
                </div> */}

                <div className="mb-5 ">
                    <label className="block mb-2 text-sm font-medium text-gray-900">Genre</label>
                    <div className="flex flex-wrap gap-4">
                    <div className="dropdown">
                        <select 
                            name="genre"
                            className="form-select mt-1 block w-full"
                        >
                            <option value="" disabled>Select a genre</option>
                            <option value="Sea facing">Sea facing</option>
                            <option value="Non sea facing">Non sea facing</option>
                        </select>
                    </div>

                    </div>
                </div>


                <button type="submit" className="mt-2 text-white bg-green-500 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Add Hotel</button>

            </form> 
        }
    <ToastContainer></ToastContainer>
    </div>
  )
}

export default AddHotel