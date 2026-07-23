import { useEffect, useMemo, useState } from "react";
import API from "../api/api";

import jsPDF from "jspdf";
import html2canvas from "html2canvas";

import {
FaFilePdf,
FaPrint,
FaCalendarAlt,
FaRobot,
FaDollarSign,
FaShoppingCart,
FaUsers,
FaBoxOpen,
FaStar,
FaExclamationTriangle,
FaChartLine
} from "react-icons/fa";


import {
ResponsiveContainer,
LineChart,
Line,
XAxis,
YAxis,
Tooltip,
CartesianGrid,
BarChart,
Bar
} from "recharts";


import "../styles/reports.css";



export default function Reports(){

const loadCompany = async()=>{

try{

const {data}=await API.get(
"/company/profile"
);


setCompany(data.company);


}

catch(error){

console.log(
"Company Error:",
error
);

}

};
const [report,setReport]=useState(null);
const [company,setCompany]=useState(null);

const [loading,setLoading]=useState(true);

const [days,setDays]=useState("30");



useEffect(()=>{

loadReport();

loadCompany();

},[days]);





const loadReport=async()=>{


try{


setLoading(true);


const {data}=await API.get(
"/ai/reports",
{
params:{
days
}
}
);



setReport(data.report);


}

catch(error){

console.log(
"REPORT ERROR",
error
);

}


finally{

setLoading(false);

}


};





const exportPDF=async()=>{


const element=
document.getElementById(
"ai-report"
);



const canvas=
await html2canvas(element);



const image=
canvas.toDataURL(
"image/png"
);



const pdf=
new jsPDF(
"p",
"mm",
"a4"
);



const width=
pdf.internal.pageSize.getWidth();



const height=
(canvas.height*width)/
canvas.width;

pdf.setFontSize(18);

pdf.text(
company?.company_name || "Your Business",
20,
20
);


pdf.setFontSize(12);

pdf.text(
"AI Business Report",
20,
30
);

pdf.addImage(
image,
"PNG",
0,
0,
width,
height
);



pdf.save(
"NovaAI_Report.pdf"
);


};





const printReport=()=>{

window.print();

};





const chartData=
useMemo(()=>{


return report?.monthlyRevenue || [];


},[report]);





if(loading){

return(

<div className="loading-box">

🤖 AI preparing report...

</div>

);

}



if(!report){

return(

<div className="loading-box">

❌ No report data

</div>

);

}



const {

revenue,

sales,

customers,

products,

bestProduct,

topProduct,

lowStock,

recommendation

}=report;



return (

<div
className="reports-page"
id="ai-report"
>


<section className="report-header glass-card">


<div>

<h1>

🤖 AI Business Report

</h1>


<p>

AI generated business performance report

</p>

</div>


<div className="report-actions">


<select

value={days}

onChange={
e=>setDays(e.target.value)
}

>

<option value="7">

Last 7 Days

</option>


<option value="30">

Last 30 Days

</option>


<option value="90">

Last 90 Days

</option>


</select>




<button onClick={exportPDF}>

<FaFilePdf/>

Export PDF

</button>



<button onClick={printReport}>

<FaPrint/>

Print

</button>



</div>


</section>
{/* SUMMARY CARDS */}

<section className="report-summary-grid">


<div className="summary-card">

<FaDollarSign/>

<h2>
${revenue || 0}
</h2>

<span>
Total Revenue
</span>

</div>



<div className="summary-card">

<FaShoppingCart/>

<h2>
{sales || 0}
</h2>

<span>
Total Sales
</span>

</div>




<div className="summary-card">

<FaUsers/>

<h2>
{customers || 0}
</h2>

<span>
Total Customers
</span>

</div>




<div className="summary-card">

<FaBoxOpen/>

<h2>
{products || 0}
</h2>

<span>
Total Products
</span>

</div>


</section>





{/* AI HIGHLIGHTS */}

<section className="report-highlights">



<div className="glass-card">

<h2>

<FaStar/>

Best Selling Product

</h2>


<h3>

{topProduct || bestProduct || "No data"}

</h3>


<p>

AI identified this as your strongest product.

</p>


</div>





<div className="glass-card">

<h2>

<FaExclamationTriangle/>

Low Stock

</h2>


<h3>

{lowStock || 0}

</h3>


<p>

Products requiring restocking.

</p>


</div>






<div className="glass-card ai-card">

<h2>

<FaRobot/>

AI Recommendation

</h2>


<p>

{recommendation ||
"AI is analyzing your business."}

</p>


</div>



</section>







{/* CHARTS */}


<section className="reports-charts-grid">



<div className="glass-card">


<h2>

<FaChartLine/>

Revenue Growth

</h2>



<ResponsiveContainer
width="100%"
height={300}
>


<LineChart data={chartData}>


<CartesianGrid
strokeDasharray="3 3"
/>


<XAxis dataKey="month"/>


<YAxis/>


<Tooltip/>



<Line

type="monotone"

dataKey="revenue"

stroke="#6366f1"

strokeWidth={3}

/>


</LineChart>


</ResponsiveContainer>



</div>








<div className="glass-card">


<h2>

🛒 Sales Performance

</h2>



<ResponsiveContainer

width="100%"

height={300}

>


<BarChart data={chartData}>


<CartesianGrid
strokeDasharray="3 3"
/>


<XAxis dataKey="month"/>


<YAxis/>


<Tooltip/>



<Bar

dataKey="sales"

fill="#8b5cf6"

/>


</BarChart>



</ResponsiveContainer>



</div>



</section>







{/* AI ANALYSIS */}


<section className="glass-card ai-analysis">


<h2>

🤖 AI Business Analysis

</h2>



<div className="analysis-grid">



<div>

<h3>

📈 Performance

</h3>

<p>

AI analyzed your sales and customer activity automatically.

</p>

</div>





<div>

<h3>

🚀 Growth Opportunity

</h3>


<p>

Focus on best selling products and improve marketing.

</p>


</div>






<div>

<h3>

📦 Inventory Strategy

</h3>


<p>

Maintain stock balance to avoid losing sales.

</p>


</div>



</div>



</section>






{/* FOOTER */}


<section className="glass-card report-footer">


<h2>

🤖 AI Report Summary

</h2>


<p>

This report was generated automatically using your Supabase business data.

</p>



<div className="report-status">


<span>

🟢 AI Online

</span>


<span>

📊 Data Updated

</span>


<span>

🔒 Supabase Connected

</span>


</div>



</section>



</div>

);

}