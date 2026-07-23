import { useEffect, useState } from "react";
import API from "../api/api";
import { supabase } from "../lib/supabaseClient";

import "../styles/dashboard.css";

import StatsCards from "../components/StatsCards";
import SalesChart from "../components/SalesChart";
import RevenueChart from "../components/RevenueChart";
import InventoryChart from "../components/InventoryChart";
import AIRecommendations from "../components/AIRecommendations";
import AIAssistant from "../components/AIAssistant";
import AIBusinessScore from "../components/AIBusinessScore";
import AIForecastChart from "../components/AIForecastChart";
import AIDashboardSummary from "../components/AIDashboardSummary";

import {
FaBell,
FaRobot,
FaChartLine,
FaBox,
FaUsers
} from "react-icons/fa";

import { Link } from "react-router-dom";


export default function Dashboard(){



const [sales,setSales] = useState([]);
const [customers,setCustomers] = useState([]);
const [products,setProducts] = useState([]);

const [aiSummary,setAiSummary] = useState(null);

const [company,setCompany] = useState(null);

const [notifications,setNotifications] = useState([]);

const [forecast,setForecast] = useState(null);

const [loading,setLoading] = useState(true);





// =============================
// LOAD DASHBOARD DATA
// =============================

const loadDashboard = async()=>{

try{


const [
salesRes,
customersRes,
productsRes
]=await Promise.all([

API.get("/sales"),
API.get("/customers"),
API.get("/products")

]);



setSales(
salesRes.data.data || []
);


setCustomers(
customersRes.data.data || []
);


setProducts(
productsRes.data.data || []
);


}

catch(error){

console.log(
"Dashboard Error:",
error
);

}

finally{

setLoading(false);

}


};





// =============================
// AI SUMMARY
// =============================


const loadAISummary = async()=>{

try{


const res =
await API.get(
"/ai/dashboard-summary"
);


setAiSummary(
res.data.summary
);


}

catch(error){

console.log(
"AI Summary Error:",
error
);

}


};





// =============================
// COMPANY
// =============================

const loadCompany = async()=>{


const {data:user}=await supabase.auth.getUser();


if(!user.user)
return;



const {data}=await supabase

.from("company_profiles")

.select("*")

.eq(
"user_id",
user.user.id
)

.single();



setCompany(data);


};






// =============================
// NOTIFICATIONS
// =============================

const loadNotifications = async()=>{


try{


const res =
await API.get(
"/ai/notifications"
);


setNotifications(
res.data.notifications || []
);


}

catch(error){

console.log(error);

}


};






// =============================
// FORECAST
// =============================

const loadForecast = async()=>{


try{


const res =
await API.get(
"/ai/forecast"
);


setForecast(
res.data
);


}

catch(error){

console.log(error);

}


};






// =============================
// REALTIME
// =============================


useEffect(()=>{


loadDashboard();

loadAISummary();

loadCompany();

loadNotifications();

loadForecast();





const tables=[
"sales",
"products",
"customers"
];



const channels =
tables.map(table=>{


return supabase

.channel(
`${table}-live`
)

.on(

"postgres_changes",

{

event:"*",

schema:"public",

table

},

()=>{

loadDashboard();

loadAISummary();

}

)

.subscribe();


});





return ()=>{


channels.forEach(channel=>{

supabase.removeChannel(channel);

});


};


},[]);







const revenue =
sales.reduce(

(total,item)=>

total + Number(item.amount || 0),

0

);







if(loading){


return(

<div className="dashboard">

<h2>
🤖 Loading AI Dashboard...
</h2>


</div>

)


}







return(


<div className="dashboard">





<section className="ai-hero-v3">


<div className="hero-left">


<span className="ai-badge">

🤖 AI BUSINESS ASSISTANT

</span>



<h1>

Good Morning 👋

</h1>



<h2>

{
company?.company_name ||
"Your Business"
}

</h2>



<p>

{
company?.business_type ||
"Business"
}

 • 

{
company?.country ||
"Country"
}


</p>



<p>

AI is monitoring your sales,
customers and inventory automatically.

</p>




<div className="hero-buttons">


<Link
to="/ai-assistant"
className="primary-btn"
>

<FaRobot/>

Ask AI

</Link>



<Link
to="/reports"
className="secondary-btn"
>

📄 Generate Report

</Link>



</div>


</div>





<div className="hero-right">


<Link
to="/notifications"
className="notification-bell"
>


<FaBell/>


<span>

{notifications.length}

</span>


</Link>




<div className="ai-orb">

🤖

</div>



<div className="ai-status">

🟢 AI Online

</div>




<div className="prediction-card">


<h4>

📈 Growth Prediction

</h4>



<h2>

$

{
forecast
?
forecast.nextMonthPrediction
:
"Loading..."
}


</h2>


<p>

AI estimated next month revenue

</p>



</div>


</div>



</section>







{/* AI SUMMARY */}

{

aiSummary &&

<AIDashboardSummary

summary={aiSummary}

/>

}








<StatsCards

customers={customers}

sales={sales}

products={products}

revenue={revenue}

/>








<AIBusinessScore/>








<section className="ai-dashboard-section">


<h2>

🤖 AI Business Intelligence

</h2>



<div className="ai-dashboard-grid">



<Link
to="/ai-forecast"
className="ai-dashboard-card"
>

<FaChartLine/>

<div>

<h3>

📊 AI Sales Forecast

</h3>


<p>

Predict future revenue

</p>


</div>


</Link>





<Link
to="/ai-inventory"
className="ai-dashboard-card"
>

<FaBox/>

<div>

<h3>

📦 AI Inventory Alert

</h3>


<p>

Detect low stock

</p>


</div>


</Link>





<Link
to="/ai-customers"
className="ai-dashboard-card"
>

<FaUsers/>

<div>

<h3>

👥 AI Customer Insights

</h3>


<p>

Find VIP customers

</p>


</div>


</Link>


</div>


</section>









<section className="analytics-grid">


<div className="glass-card">

<h2>
🤖 AI Sales Forecast
</h2>


<AIForecastChart
sales={sales}
/>


</div>





<div className="glass-card">

<h2>
💰 Revenue Growth
</h2>


<RevenueChart
sales={sales}
/>


</div>





<div className="glass-card">

<h2>
🛒 Sales Performance
</h2>


<SalesChart
sales={sales}
/>


</div>


</section>









<section className="analytics-grid">


<div className="glass-card">

<h2>
🤖 AI Recommendations
</h2>


<AIRecommendations

sales={sales}

products={products}

/>


</div>





<div className="glass-card">

<h2>
📦 Inventory Status
</h2>


<InventoryChart

products={products}

/>


</div>



</section>








<section className="glass-card recent-sales">


<h2>

📋 Recent Sales

</h2>



{

sales.length===0

?

<p>
No sales available
</p>


:


sales.slice(0,5).map(item=>(


<div
className="sale-row"
key={item.id}
>


<span>

{item.product || "Product"}

</span>


<strong>

${Number(item.amount || 0)}

</strong>


</div>


))


}



</section>








<AIAssistant/>


</div>


);


}