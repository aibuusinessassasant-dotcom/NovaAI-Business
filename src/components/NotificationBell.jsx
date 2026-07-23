import { useState } from "react";
import { FaBell } from "react-icons/fa";


export default function NotificationBell(){


const [open,setOpen] = useState(false);



const notifications=[

{
title:"New Sale",
message:"Ahmed placed a new order",
time:"2 min ago"
},

{
title:"Low Stock",
message:"Laptop stock is running low",
time:"10 min ago"
},

{
title:"AI Report",
message:"Monthly report is ready",
time:"1 hour ago"
}

];



return(

<div className="notification-wrapper">


<button

className="notification-btn"

onClick={()=>setOpen(!open)}

>


<FaBell/>


<span className="notification-badge">

3

</span>


</button>





{

open &&

<div className="notification-panel">


<h3>

Notifications

</h3>



{

notifications.map((item,index)=>(


<div

className="notification-item"

key={index}

>


<div>

<strong>

{item.title}

</strong>


<p>

{item.message}

</p>


</div>


<span>

{item.time}

</span>



</div>


))


}



</div>

}



</div>


);


}