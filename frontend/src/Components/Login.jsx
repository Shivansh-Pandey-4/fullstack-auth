import { useState} from "react";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";


const Login =()=>{

    const [email,setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();


    async function loginFunction(){
          console.log(email,password);
          const response = await fetch("http://localhost:3000/user/login",{
             method : "POST",
             headers : {
                 "content-type" : "application/json"
             },
             body : JSON.stringify({email,password})
          });
          const data = await response.json();
          if(data.msg == "user login successfully"){
                toast.success("user login successfully");
                return navigate("/");
          }else {
             toast.error(data.msg);
          }
    }
    

     return(

        <div className="flex justify-center items-center text-white bg-black min-h-screen">


        <div className="border-2 shadow-2xl shadow-amber-500 rounded-2xl  m-10 w-3/12 p-3 h-100 flex flex-col items-center">
            <h1 className="text-center text-white pb-6 text-3xl">Login</h1>
            <Link to={"/signup"}>
                 <button className="text-xl bg-gray-100 px-4 py-1 rounded-xl m-4 cursor-pointer hover:bg-gray-200  text-blue-600 " >Don't Have A Account ?</button>
            </Link>

            <form onSubmit={(e) => { e.preventDefault(); 
                loginFunction(); }} className="flex flex-col items-center">

          <div>

               <input required className="border m-3 h-10 w-70 pl-12  " type="email" placeholder="Email Id" value={email} onChange={
                    (event)=>{
                         setEmail(event.target.value);
                    }}/>
          </div>
          <div>

                <input required className=" text-white border m-3 h-10 w-70 pl-12 " type="password" placeholder="Password" value={password} onChange={(event)=>{
                    setPassword(event.target.value);
                }} />

          </div>
          <button type="submit" className=" bg-green-400 text-white text-xl  border-2 border-black font-mono py-2 px-7 rounded-2xl my-8 cursor-pointer">Login</button>

     </form>
        
           
        </div>
</div>
     )
};

export default Login;