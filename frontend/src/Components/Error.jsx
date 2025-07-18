import { Link } from "react-router-dom";

const Error = ()=>{
     return (
         <div className="min-h-screen pt-10 flex flex-col items-center bg-black ">
             <h1 className="pb-10 text-2xl text-white">THIS IS A ERROR PAGE</h1>
             <button className="cursor-pointer hover:bg-indigo-500 border px-3 text-white py-1 "><Link to={"/"}> GO TO HOME</Link></button>
         </div>
     )
}

export default Error;