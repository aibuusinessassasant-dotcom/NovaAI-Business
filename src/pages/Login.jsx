import { useState } from "react";
import { supabase } from "../lib/supabaseClient";
import { useNavigate } from "react-router-dom";

import "../styles/auth-premium.css";


export default function Login(){


const navigate = useNavigate();


const [email,setEmail]=useState("");

const [password,setPassword]=useState("");

const [loading,setLoading]=useState(false);

const [error,setError]=useState("");




const login = async(e)=>{


e.preventDefault();


setLoading(true);

setError("");



const {error}=await supabase.auth.signInWithPassword({

email,

password

});



if(error){

setError(error.message);

}

else{


navigate("/");


}



setLoading(false);



};




return(

<div className="auth-page">


<div className="auth-card">


<div className="auth-logo">

🤖

</div>



<h1>

AI Business Assistant

</h1>


<p>

Welcome back, manage your business with AI

</p>




<form onSubmit={login}>


<input

type="email"

placeholder="Email"

value={email}

onChange={(e)=>setEmail(e.target.value)}

/>




<input

type="password"

placeholder="Password"

value={password}

onChange={(e)=>setPassword(e.target.value)}

/>




{error &&

<div className="auth-error">

{error}

</div>

}



<button>

{

loading

?

"Signing in..."

:

"Login"

}


</button>



</form>




<p className="switch">


Don't have account?


<span onClick={()=>navigate("/register")}>

 Register

</span>


</p>



</div>


</div>


)

}