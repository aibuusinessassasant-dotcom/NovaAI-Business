import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "../lib/supabaseClient";


export default function ProtectedRoute({children}){


const [user,setUser]=useState(null);

const [loading,setLoading]=useState(true);



useEffect(()=>{


checkUser();


},[]);




const checkUser=async()=>{


const {

data:{session}

}=await supabase.auth.getSession();



setUser(session?.user || null);


setLoading(false);



};



if(loading){

return(

<div>

Loading...

</div>

)

}




if(!user){

return <Navigate to="/login"/>

}



return children;


}