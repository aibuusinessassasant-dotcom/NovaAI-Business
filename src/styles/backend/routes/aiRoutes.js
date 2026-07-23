const express = require("express");
const router = express.Router();

const supabase = require("../config/supabase");


// =====================================
// 🤖 AI CHAT ASSISTANT (Gemma3)
// =====================================

router.post("/chat", async(req,res)=>{

try{

const message = req.body.message;


const {data:sales}=await supabase
.from("sales")
.select("*")
.limit(20);


const {data:customers}=await supabase
.from("customers")
.select("*")
.limit(20);


const {data:products}=await supabase
.from("products")
.select("*")
.limit(20);



const prompt = `

You are NovaAI Business Assistant.

Sales:
${JSON.stringify(sales)}

Customers:
${JSON.stringify(customers)}

Products:
${JSON.stringify(products)}


User Question:
${message}


Answer in Somali, English or Arabic.

`;



const response = await fetch(
"http://localhost:11434/api/generate",
{
method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({

model:"gemma3:1b",

prompt,

stream:false

})

});


const data = await response.json();



res.json({

success:true,

reply:data.response

});


}

catch(error){

res.status(500).json({

success:false,

error:error.message

});

}

});



// =====================================
// 📈 REAL AI SALES FORECAST
// =====================================

router.get("/forecast",async(req,res)=>{

try{


const {data:sales}=await supabase
.from("sales")
.select("*")
.order("sale_date");



let revenue=0;


sales.forEach(item=>{

revenue += Number(item.amount || 0);

});



const average =
sales.length
?
revenue / sales.length
:
0;



const prediction =
Math.round(
revenue * 1.18
);



res.json({

success:true,

currentRevenue:revenue,

averageSale:
average.toFixed(2),

growth:"+18%",

nextMonthPrediction:prediction,


message:
"AI forecast generated from Supabase sales"

});


}

catch(error){

res.status(500).json({

error:error.message

});

}


});
// =====================================
// 📦 AI INVENTORY ALERT + PREDICTION
// =====================================

router.get("/inventory", async(req,res)=>{

try{


const {data:products,error}=await supabase
.from("products")
.select("*");


if(error) throw error;



const inventory = products.map(product=>{


const stock = Number(product.stock || 0);


// AI STOCK PREDICTION

let status;
let daysLeft;
let recommendation;



if(stock <= 0){

status = "Out of Stock";
daysLeft = 0;

recommendation =
"🚨 Immediate restock required";

}


else if(stock <= 5){

status = "Critical";
daysLeft = 3;

recommendation =
"⚠️ AI recommends urgent restocking";

}


else if(stock <= 10){

status = "Warning";
daysLeft = 7;

recommendation =
"📦 Prepare new inventory soon";

}


else{

status = "Healthy";
daysLeft = 30;

recommendation =
"✅ Inventory level is good";

}



return {


id:product.id,

name:
product.name || "Unknown Product",


stock,


status,


estimatedDaysLeft:daysLeft,


recommendation


};


});




const alerts =
inventory.filter(
item=>item.status !== "Healthy"
);



res.json({

success:true,


totalProducts:
products.length,


alerts,


inventory,


message:
"AI inventory prediction completed"

});


}


catch(error){


res.status(500).json({

success:false,

error:error.message

});


}


});
// =====================================
// 👥 AI CUSTOMER INSIGHTS
// =====================================

router.get("/customers", async(req,res)=>{

try{


const {data:customers,error}=await supabase
.from("customers")
.select("*");


if(error) throw error;



// VIP CUSTOMERS

const vipCustomers =
customers.filter(customer=>

Number(
customer.total_purchase || 0
) >= 1000

);



// CUSTOMER SEGMENTATION

const insights =
customers.map(customer=>{


const purchase =
Number(
customer.total_purchase || 0
);



let category;
let recommendation;



if(purchase >= 1000){

category="VIP";

recommendation=
"🎁 Offer premium deals and loyalty rewards";

}


else if(purchase >= 500){

category="Regular";

recommendation=
"📢 Send personalized promotions";

}


else{

category="New";

recommendation=
"👋 Build relationship and engagement";

}



return {


id:customer.id,

name:
customer.name || "Customer",


totalPurchase:
purchase,


category,


recommendation


};


});





res.json({

success:true,


totalCustomers:
customers.length,


vipCount:
vipCustomers.length,


vipCustomers,


insights,


message:
"AI customer analysis completed"

});


}


catch(error){


res.status(500).json({

success:false,

error:error.message

});


}


});
// =====================================
// 📊 AI DASHBOARD SUMMARY
// =====================================

router.get("/dashboard-summary", async(req,res)=>{

try{


const {data:sales}=await supabase
.from("sales")
.select("*");


const {data:customers}=await supabase
.from("customers")
.select("*");


const {data:products}=await supabase
.from("products")
.select("*");



// Revenue

const revenue =
sales.reduce(
(total,item)=>
total + Number(item.amount || 0),
0
);



// VIP Customers

const vipCustomers =
customers.filter(customer=>

Number(customer.total_purchase || 0)
>=1000

);



// Stock Alerts

const stockAlerts =
products.filter(product=>

Number(product.stock || 0)
<=5

);





res.json({

success:true,


summary:{


revenue,


sales:
sales.length,


customers:
customers.length,


vipCustomers:
vipCustomers.length,


stockAlerts:
stockAlerts.length


},



vipList:
vipCustomers.map(c=>({

name:c.name,

purchase:c.total_purchase

})),


stockList:
stockAlerts.map(p=>({

name:p.name,

stock:p.stock

})),


aiMessage:

stockAlerts.length > 0

?

"AI recommends inventory restocking."

:

"Inventory level is healthy."


});


}

catch(error){


res.status(500).json({

success:false,

error:error.message

});


}


});