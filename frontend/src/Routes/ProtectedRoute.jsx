// import React, { useContext } from 'react'
// import { Navigate, useLocation } from 'react-router-dom';
// import { AuthContext } from '../Providers/AuthProvider';
// import Spinner from '../Components/Spinner';

// function ProtectedRoute({children}) {
//     const {user,loading} = useContext(AuthContext);
//     const {pathname} = useLocation();

//     if(loading)
//         return(
//             <Spinner></Spinner>
//         )

//     if(user){
//         return children;
//     }

//     return <Navigate state = {pathname} to = '/login'></Navigate>
// }

// export default ProtectedRoute