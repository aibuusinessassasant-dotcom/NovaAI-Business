import {
 FaDollarSign,
 FaShoppingCart,
 FaChartLine
} from "react-icons/fa";

import "../styles/sales.css";


export default function Sales(){


const stats=[

{
title:"Total Revenue",
value:"$4,300",
icon:<FaDollarSign/>
},

{
title:"Total Orders",
value:"248",
icon:<FaShoppingCart/>
},

{
title:"Growth",
value:"+24%",
icon:<FaChartLine/>
}

];


return(

<div className="sales-page">


<div className="sales-header">

<div>

<h1>
Sales Management 💰
</h1>

<p>
Track your business revenue
</p>

</div>


<button className="export-btn">
Export Report
</button>


</div>





<div className="sales-cards">


{
stats.map((item,index)=>(


<div className="sales-card" key={index}>


<div className="sales-icon">

{item.icon}

</div>


<h4>
{item.title}
</h4>


<h2>
{item.value}
</h2>


<span>
Updated today
</span>


</div>


))
}


</div>





<div className="sales-main">


<div className="sales-table-box">


<h2>
Recent Sales
</h2>


<div className="sale-item">

<span>
Business Software
</span>

<strong>
$2500
</strong>


</div>



<div className="sale-item">

<span>
Cloud Service
</span>

<strong>
$1800
</strong>


</div>



</div>





<div className="ai-sales">


<h2>
🤖 AI Sales Forecast
</h2>


<p>

AI predicts your next month revenue may increase by

<strong>
24%
</strong>

based on current trends.

</p>


<button>
View Forecast
</button>


</div>



</div>



</div>

)

}