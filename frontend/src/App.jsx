import React from "react"
import ReactDOM from "react-dom/client";
import Signup from "./Components/Signup";
import Login from "./Components/Login";
import {createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
import {ToastContainer} from "react-toastify";

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
        children : [
              {
              path : "/signup",
              element : <Signup/>
            },
            {
              path : "/login",
              element : <Login/>
            }
        ]
      }
]);




const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);
