import { Link } from "react-router-dom";


const Home = ()=>{
     return (
         <div>
            <div className=" flex  flex-col justify-center items-center min-h-screen bg-black">

             <h1 className="mb-10  text-3xl text-white">This is the Home page.</h1>

             <h1 className="mb-4  text-3xl text-white">Nothing to see here.🥱</h1>
             <h1 className="mb-4 text-3xl text-white">Try my authentication page.😃</h1>
             <span className="mb-20 text-5xl">👇</span>
             <div>

             <button className=" mr-5 border px-3 py-1 rounded-xl bg-orange-500 hover:text-white cursor-pointer text-black hover:bg-indigo-500 "> <Link to={"/login"}> GO TO LOGIN PAGE </Link> </button>

             <button className=" border px-3 py-1 rounded-xl bg-orange-500 text-black hover:bg-indigo-500 hover:text-white cursor-pointer "> <Link to={"/signup"}> GO TO SIGNUP PAGE </Link> </button>
             </div>

            </div>

         </div>
     )
}

export default Home;