import { useEffect, useState } from "react";
import API from "../api/api";

import {
  FaBell,
  FaChartLine,
  FaBox,
  FaStar,
  FaRobot
} from "react-icons/fa";

import "../styles/notifications.css";


export default function Notifications(){


const [notifications,setNotifications] = useState([]);

const [loading,setLoading] = useState(true);



useEffect(()=>{

fetchNotifications();

},[]);





const fetchNotifications = async()=>{


try{


const response = await API.get(
"/ai/notifications"
);



setNotifications(
response.data.notifications || []
);



}

catch(error){

console.log(
"AI Notifications Error:",
error
);


}

finally{

setLoading(false);

}


};







const iconHandler=(type,icon)=>{


if(icon){

return icon;

}



switch(type){


case "inventory":

return <FaBox/>;


case "sales":

return <FaChartLine/>;


case "product":

return <FaStar/>;


default:

return <FaRobot/>;


}


};







if(loading){


return(

<div className="notifications-page">

<h2>
🤖 AI Loading Notifications...
</h2>

</div>

);

}







return(

<div className="notifications-page">



<section className="notification-header glass-card">



<div>


<span className="ai-badge">

🔔 AI NOTIFICATIONS

</span>



<h1>

Business Intelligence Alerts

</h1>



<p>

AI monitors your sales, inventory and customers automatically.

</p>



</div>





<div className="notification-count">


<FaBell/>


<h2>

{notifications.length}

</h2>


<span>

Alerts

</span>


</div>



</section>









<section className="notification-grid">



{

notifications.length === 0 ?



<div className="empty-box glass-card">


<h2>

✅ Business Healthy

</h2>


<p>

AI found no issues.

</p>


</div>



:



notifications.map((item,index)=>(



<div

key={index}

className={`notification-card ${item.type}`}

>




<div className="notification-icon">


{iconHandler(
item.type,
item.icon
)}


</div>





<div>


<h3>

AI Alert

</h3>



<p>

{item.message}

</p>



<span className="notification-time">

Just now

</span>



</div>




</div>



))


}



</section>





</div>


);


}