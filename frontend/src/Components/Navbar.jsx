// import React, { useContext, useEffect, useState } from 'react'
// import { Link, NavLink } from 'react-router-dom'
// import { AuthContext } from '../Providers/AuthProvider'
// import Spinner from './Spinner';
// import { IoHomeOutline } from 'react-icons/io5';
// import { IoMdAddCircleOutline } from 'react-icons/io';
// import { MdOutlineFilePresent } from 'react-icons/md';

// function Navbar() {
//     const { user, loading } = useContext(AuthContext);
//     const list = 
//     <div className='flex flex-col lg:flex-row gap-2 font-semibold'>
//         <li><NavLink to="/" className={({isActive})=>isActive?'text-blue-600 duration-500 rounded-full px-4 py-2 bg-blue-50 flex justify-center':'text-black px-4 py-2  flex   justify-center'}><p className='flex gap-0.5 items-center'><IoHomeOutline className='text-blue-600 font-extrabold'></IoHomeOutline> Home</p></NavLink></li>
//         <li><NavLink to="/add_book" className={({isActive})=>isActive?'text-blue-600 duration-500 rounded-full px-4 py-2 bg-blue-50 flex justify-center':'text-black px-4 py-2  flex   justify-center'}><p className='flex gap-0.5 items-center'><IoMdAddCircleOutline className='text-green-600 font-extrabold'></IoMdAddCircleOutline> Add Book</p></NavLink></li>
//         {
//             user && 
//             <li><NavLink to="/available" className={({isActive})=>isActive?'text-blue-600 duration-500 rounded-full px-4 py-2 bg-blue-50 flex justify-center':'text-black px-4 py-2  flex   justify-center'}><p className='flex gap-0.5 items-center'><MdOutlineFilePresent className='text-red-400 font-extrabold'></MdOutlineFilePresent> Available Books</p></NavLink></li>
//         }
//     </div>

//     const [isDropdownOpen, setDropdownOpen] = useState(false);
//     const [url,setUrl]= useState('');

//     useEffect(()=>{
//         setUrl(user?.photoURL);
//     },[user])

//     function defaultImage(){
//         setUrl('https://img.freepik.com/free-vector/illustration-businessman_53876-5856.jpg?size=626&ext=jpg&ga=GA1.1.2082370165.1715904000&semt=ais_user')
//     }

//     const toggleDropdown = () => {
//         setDropdownOpen(!isDropdownOpen);
//     };

//     const closeDropdown = () => {
//         setDropdownOpen(false);
//     };


//     return (
//     <div className="navbar bg-base-100">
//         <div className="navbar-start">
//             <div className="dropdown">
//                 <div tabIndex={0} role="button" className="lg:hidden mr-4">
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
//                 </div>
//                 <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
//                 {list}
//                 </ul>
//             </div>
//             <Link className="font-bold text-xl mx-[-4px]" to = '/'>
//                 <p className='flex gap-1'> <img src = '/book-solid.svg' width={20}></img> Books Buy</p>
//             </Link>
//         </div>

//         <div className="navbar-center hidden lg:flex">
//             <ul className="menu menu-horizontal ">
//                 {list}
//             </ul>
//         </div>

//         <div className="navbar-end">
//             {
//                loading?  
//                 <div role="status" className=''>
//                         <svg aria-hidden="true" class="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
//                             <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
//                             <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
//                         </svg>
//                         <span class="sr-only">Loading...</span>
//                 </div> 
//                 :
                
//                 <div> 
//                 {
//                     user ? 
//                     <div className={`dropdown dropdown-bottom dropdown-end ${isDropdownOpen ? 'open' : ''}`}>
//                         <div tabIndex={0} role="button" className="mx-2" onClick={toggleDropdown}>
//                             <img src={url} onError={defaultImage} width={30} className='border-green-500 border-4 rounded-full' alt="User" />
//                         </div>
//                         <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
//                             <li><Link to="/profile" onClick={closeDropdown}>Profile</Link></li>
//                             <li><Link to = {`/rented_books`} onClick={closeDropdown}>My Rented Books</Link></li>
//                             <li><Link to = {`/added_books`} onClick={closeDropdown}>My Added Books</Link></li>
//                         </ul>
//                     </div>
//                     :
//                     <Link to = '/login' className="btn">Login</Link>
//                } 
//                </div>
//             }
//         </div>
//     </div>
//     )
// }

// export default Navbar