import {
ResponsiveContainer,
LineChart,
Line,
XAxis,
YAxis,
Tooltip,
CartesianGrid
} from "recharts";


export default function AIForecastChart({sales}){


const monthly = {};


sales.forEach(item=>{


const date = new Date(item.sale_date);

const month =
date.toLocaleString(
"en-US",
{
month:"short"
}
);


if(!monthly[month]){
monthly[month]=0;
}


monthly[month]+=Number(item.amount || 0);


});



let chartData =
Object.keys(monthly).map(month=>({

month,

revenue:monthly[month],

type:"Actual"

}));



// AI FUTURE PREDICTION

const total =
sales.reduce(
(sum,item)=>
sum + Number(item.amount || 0),
0
);



const prediction =
Math.round(
(total/sales.length)*sales.length*1.18
);



chartData.push({

month:"Future",

revenue:prediction,

type:"AI Prediction"

});





return (

<div style={{width:"100%",height:350}}>


<ResponsiveContainer>


<LineChart data={chartData}>


<CartesianGrid strokeDasharray="3 3"/>


<XAxis dataKey="month"/>


<YAxis/>


<Tooltip/>


<Line

type="monotone"

dataKey="revenue"

stroke="#7c3aed"

strokeWidth={3}

/>


</LineChart>


</ResponsiveContainer>


</div>


);


}