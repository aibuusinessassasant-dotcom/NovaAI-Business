import {
  FaUserPlus,
  FaShoppingCart,
  FaMoneyBillWave,
  FaBox,
  FaRobot
} from "react-icons/fa";

import "../styles/recentActivity.css";


export default function RecentActivity(){

const activities = [

{
icon:<FaUserPlus/>,
title:"New customer registered",
time:"2 minutes ago"
},

{
icon:<FaShoppingCart/>,
title:"New order created",
time:"10 minutes ago"
},

{
icon:<FaMoneyBillWave/>,
title:"Payment received $2,500",
time:"30 minutes ago"
},

{
icon:<FaBox/>,
title:"New product added",
time:"1 hour ago"
},

{
icon:<FaRobot/>,
title:"AI generated sales insight",
time:"Today"
}

];


return (

<div className="activity-card">


<div className="activity-header">

<h2>
Recent Activity
</h2>

<p>
Latest business updates
</p>

</div>



<div className="activity-list">


{activities.map((item,index)=>(


<div className="activity-item" key={index}>


<div className="activity-icon">

{item.icon}

</div>


<div>

<h4>
{item.title}
</h4>

<span>
{item.time}
</span>

</div>


</div>


))}


</div>


</div>

);

}