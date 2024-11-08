import { createBrowserRouter } from "react-router-dom";
import Root from '../Root'
import Homepage from '../Pages/Homepage'
import ErrorPage from "../Pages/ErrorPage";
import LoginPage from "../Pages/LoginPage";
import RegisterPage from "../Pages/RegisterPage";
import ProfilePage from "../Pages/ProfilePage";
import ProtectedRoute from "./ProtectedRoute";
import AddHotel from "../Pages/AddHotel";


const  router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement:<ErrorPage></ErrorPage>, 
      children:[
        {
          index:true,
          element:<Homepage></Homepage>,          
        },
        {
          path:'/login',
          element:<LoginPage></LoginPage>         
        },
        {
          path:'/register',
          element:<RegisterPage></RegisterPage>
        },
        {
          path:'/profile',
          element:<ProtectedRoute><ProfilePage></ProfilePage></ProtectedRoute>
        },
        {
          path:'/add_hotel',
          element:<ProtectedRoute><AddHotel></AddHotel> </ProtectedRoute> 
        },
        {
          path:'/details/:id',
          element:<ProtectedRoute> <Detailspage></Detailspage></ProtectedRoute>,
          loader:({params})=>axios.get(`https://b9a11-server-side-khalid586.vercel.app/details/${params.id}`).then(res => res.data)
        },
        {
          path:'/rented_hotels',
          element:<ProtectedRoute><Rentedhotels></Rentedhotels></ProtectedRoute> ,
        },
        {
          path:'/added_hotels',
          element:<ProtectedRoute><Addedhotels></Addedhotels></ProtectedRoute> ,
        },
      ]
    },
  ]);
        
export default router;