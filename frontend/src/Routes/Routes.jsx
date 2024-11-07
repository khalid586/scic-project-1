import { createBrowserRouter } from "react-router-dom";
import Root from '../Root'
import Homepage from '../Pages/Homepage'
import ErrorPage from "../Pages/ErrorPage";


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
      ]
    },
  ]);

export default router;