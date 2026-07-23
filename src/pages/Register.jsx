import {useState} from "react";

import {supabase} from "../lib/supabaseClient";

import {useNavigate} from "react-router-dom";

import "../styles/auth-premium.css";



export default function Register(){


const navigate=useNavigate();


const [email,setEmail]=useState("");

const [password,setPassword]=useState("");

const [name,setName]=useState("");



const signup=async(e)=>{


e.preventDefault();



const {error}=await supabase.auth.signUp({

email,

password,

options:{

data:{

name

}

}

});



if(!error){

navigate("/login");

}


};




return(

<div className="auth-page">


<div className="auth-card">


<div className="auth-logo">

🤖

</div>


<h1>

Create Account

</h1>


<p>

Start managing your business with AI

</p>




<form onSubmit={signup}>


<input

placeholder="Full Name"

value={name}

onChange={(e)=>setName(e.target.value)}

/>




<input

placeholder="Email"

type="email"

value={email}

onChange={(e)=>setEmail(e.target.value)}

/>




<input

placeholder="Password"

type="password"

value={password}

onChange={(e)=>setPassword(e.target.value)}

/>




<button>

Create Account

</button>



</form>




<p className="switch">


Already have account?


<span onClick={()=>navigate("/login")}>

 Login

</span>


</p>



</div>


</div>


)

}