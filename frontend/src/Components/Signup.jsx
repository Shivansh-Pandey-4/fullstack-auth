import { useState } from "react";
import { Link , useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Signup = () =>{

    const [signupEmail, setSignupEmail] = useState("");
    const [signupPassword, setSignupPassword] = useState("");
    const [name, setName] = useState("");

    const navigate = useNavigate();

     async function signupFunction(){
        console.log(signupEmail,name,signupPassword);

        if(!signupEmail|| !name || !signupPassword){
               return toast.error("fill all the inputs");
        }
        
          const response = await fetch("http://localhost:3000/user/signup",{
              method : "POST",
              headers : {
                 "content-type" : "application/json"
              },
              body : JSON.stringify({email : signupEmail,password: signupPassword,name})
          })
          const data = await response.json();
          if(data.msg=="user signed up successfully"){
                toast.success(data.msg);
                navigate("/login");
          }else {
              toast.error(data.msg);
          }

     }


     return(
          <div className="flex justify-center ">

        <div className="border-2 m-10 w-3/12 p-3 flex flex-col items-center shadow-xl shadow-amber-900 rounded-xl">
            <h1 className="text-center pb-6 text-3xl">Signup</h1>

           <Link to={"/login"}>
            <button className="text-xl text-blue-600 bg-gray-100 px-4 py-1 rounded-2xl m-4 cursor-pointer hover:bg-gray-200" >Already have a Account ?</button>
           </Link>


          <div>

               <input className="border m-3 h-10 w-70 pl-12 " type="email" placeholder="Email Id" value={signupEmail} onChange={
                   (event)=>{
                       setSignupEmail(event.target.value);
                    }}/>
              
          </div>
          <div>

                <input className="border m-3 h-10 w-70 pl-12 " type="password" placeholder="Password" value={signupPassword} onChange={(event)=>{
                    setSignupPassword(event.target.value);
                }} />

          </div>
           <div>

                <input className="border m-3 h-10 w-70 pl-12 " type="text" placeholder="Full Name" value={name} onChange={(event)=>{
                    setName(event.target.value);
                }} />

          </div>
          <button onClick={signupFunction} className="bg-green-400 text-white font-mono text-xl border-2 border-black py-2 px-7 rounded-2xl cursor-pointer my-4 hover:bg-green-500">Signup</button>

        </div>
                </div>
     )
}

export default Signup;