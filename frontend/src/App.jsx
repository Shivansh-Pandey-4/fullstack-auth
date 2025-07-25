import React from "react"
import ReactDOM from "react-dom/client";
import Signup from "./Components/Signup";
import Login from "./Components/Login";
import {createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
import {ToastContainer} from "react-toastify";
import Error from "./Components/Error";
import Home from "./Components/Home";


const App = () => {
    return (
         <div>
           <Outlet/>
           <ToastContainer/>
         </div>
    )
}

const appRouter = createBrowserRouter([
  {
     path : "/",
     element : <App/>,
     errorElement: <Error/>, 
     children : [
      {
         path : "/",
         element : <Home/>
      },
      {
        path : "/login",
        element : <Login/>
      },
      {
        path : "/signup",
        element : <Signup/>
      },
     ]
  },
  
])



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);
