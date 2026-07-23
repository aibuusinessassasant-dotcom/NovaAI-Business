import { useState } from "react";

import {
  FaSearch,
  FaUserPlus,
  FaTrash,
  FaUsers,
  FaStar
} from "react-icons/fa";

import "../styles/crm.css";


export default function CRM(){


const [customers,setCustomers] = useState([

{
id:1,
name:"Ahmed Ali",
email:"ahmed@gmail.com",
vip:true
},

{
id:2,
name:"Nova Company",
email:"info@nova.com",
vip:true
}

]);


const [name,setName]=useState("");

const [email,setEmail]=useState("");

const [search,setSearch]=useState("");




function addCustomer(){


if(!name || !email) return;


setCustomers([

...customers,

{
id:Date.now(),
name,
email,
vip:false
}

]);


setName("");

setEmail("");

}




function deleteCustomer(id){

setCustomers(

customers.filter(
(c)=>c.id !== id
)

);

}





const filtered = customers.filter((c)=>

c.name
.toLowerCase()
.includes(search.toLowerCase())

);




return (

<div className="crm-page">


<div className="crm-header">


<div>

<h1>
CRM Customers 👥
</h1>

<p>
Manage your business customers
</p>

</div>



<div className="crm-stat">

<FaUsers/>

{customers.length}

</div>


</div>





<div className="crm-form">


<input

placeholder="Customer Name"

value={name}

onChange={(e)=>setName(e.target.value)}

/>


<input

placeholder="Customer Email"

value={email}

onChange={(e)=>setEmail(e.target.value)}

/>


<button onClick={addCustomer}>

<FaUserPlus/>

Add

</button>


</div>





<div className="crm-search">

<FaSearch/>


<input

placeholder="Search..."

value={search}

onChange={(e)=>setSearch(e.target.value)}

/>


</div>





<div className="crm-table">


<div className="crm-head">

<span>Name</span>

<span>Email</span>

<span>Action</span>

</div>




{

filtered.map((customer)=>(


<div className="crm-row" key={customer.id}>


<span>

{customer.name}


{customer.vip &&

<small className="vip">

<FaStar/> VIP

</small>

}


</span>



<span>
{customer.email}
</span>



<button

onClick={()=>deleteCustomer(customer.id)}

>

<FaTrash/>

</button>


</div>


))

}



</div>


</div>


);


}