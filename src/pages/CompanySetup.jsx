import {useState} from "react";
import {supabase} from "../lib/supabaseClient";
import {useNavigate} from "react-router-dom";

import "../styles/company.css";


export default function CompanySetup(){


const navigate=useNavigate();


const [form,setForm]=useState({

company_name:"",
business_type:"",
country:"",
industry:""

});



const submit=async()=>{


const {data}=await supabase.auth.getUser();


await supabase
.from("company_profiles")
.insert({

user_id:data.user.id,

...form

});



navigate("/");


};



return(

<div className="company-page">


<div className="company-card">


<h1>

Welcome 👋

</h1>


<p>

Create your business workspace

</p>



<input
placeholder="Company Name"
onChange={
e=>setForm({...form,company_name:e.target.value})
}
/>



<input
placeholder="Business Type"
onChange={
e=>setForm({...form,business_type:e.target.value})
}
/>



<input
placeholder="Country"
onChange={
e=>setForm({...form,country:e.target.value})
}
/>




<input
placeholder="Industry"
onChange={
e=>setForm({...form,industry:e.target.value})
}
/>



<button onClick={submit}>

Create Workspace

</button>


</div>


</div>

)

}