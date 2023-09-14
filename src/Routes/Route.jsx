import {    // Importing react-router-dom module
    createBrowserRouter,
 
  } from "react-router-dom";    // Importing createBrowserRouter function from react-router-dom module
import SearchPage from "../Pages/SearchPage";    // Importing SearchPage module from Pages/SearchPage module
import MainLayout from "../Layouts/MainLayout";

const router = createBrowserRouter([    // createBrowserRouter() function will create a new browser router
    {
      path: "/",    // path of the route
      element: <MainLayout/>,    // element of the route
    },
  ]);


  export default router;
