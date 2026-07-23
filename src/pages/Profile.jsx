import {useEffect,useState} from "react";
import {supabase} from "../lib/supabaseClient";

import "../styles/profile.css";


export default function Profile(){


const [user,setUser]=useState(null);



useEffect(()=>{


loadUser();


},[]);



const loadUser=async()=>{


const {

data:{user}

}=await supabase.auth.getUser();


setUser(user);


};



return(

<div className="profile-card">


<h1>

👤 Profile

</h1>


{

user &&

<>

<h2>

{

user.user_metadata?.name ||

"AI User"

}

</h2>


<p>

📧 {user.email}

</p>


<p>

Account created:

{

new Date(
user.created_at
).toLocaleDateString()

}

</p>


</>

}


</div>


)

}