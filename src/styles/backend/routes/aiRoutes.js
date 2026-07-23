const express = require("express");
const router = express.Router();

const supabase = require("../config/supabase");
const createNotification = require("../utils/createNotification");

// =====================================
// 🤖 AI CHAT ASSISTANT
// =====================================

router.post("/chat", async (req, res) => {

try {

const message = req.body.message;


const {data:sales}= await supabase
.from("sales")
.select("*")
.limit(20);


const {data:customers}= await supabase
.from("customers")
.select("*")
.limit(20);


const {data:products}= await supabase
.from("products")
.select("*")
.limit(20);



const prompt = `

You are NovaAI Business Assistant.

Business Data:

Sales:
${JSON.stringify(sales)}

Customers:
${JSON.stringify(customers)}

Products:
${JSON.stringify(products)}


Question:

${message}


Answer in the same language:
Somali, English or Arabic.

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

console.log(error);

res.status(500).json({

success:false,

error:error.message

});

}


});





// =====================================
// 🤖 AI BUSINESS SCORE
// =====================================


router.get("/score", async(req,res)=>{

try{
router.get("/notifications", async(req,res)=>{

try{


const notifications=[];



// PRODUCTS

const {data:products}=await supabase
.from("products")
.select("*");



products.forEach(async(product)=>{


if(Number(product.stock)<=5){


notifications.push({

title:"Low Stock Alert",

message:
`${product.name} stock is low. Stock: ${product.stock}`,

type:"warning"

});


}


});





// SALES

const {data:sales}=await supabase
.from("sales")
.select("*");



let revenue=0;


sales.forEach(item=>{

revenue += Number(item.amount || 0);

});



if(revenue>1000){


notifications.push({

title:"Revenue Strong",

message:
`Revenue is strong. Total revenue: $${revenue}`,

type:"success"

});


}






// BEST PRODUCT

const count={};


sales.forEach(item=>{


let name=item.product || "Product";


count[name]=(count[name]||0)+1;


});



let bestProduct="";


let max=0;


Object.keys(count).forEach(name=>{


if(count[name]>max){

max=count[name];

bestProduct=name;

}


});



if(bestProduct){


notifications.push({

title:"Best Selling Product",

message:
`Best selling product: ${bestProduct}`,

type:"vip"

});


}






res.json({

success:true,

count:notifications.length,

notifications


});



}
catch(error){


res.status(500).json({

success:false,

error:error.message

});


}


});

const {data:sales}=await supabase
.from("sales")
.select("*");


const {data:customers}=await supabase
.from("customers")
.select("*");


const {data:products}=await supabase
.from("products")
.select("*");



let revenue=0;


sales.forEach(item=>{

revenue += Number(item.amount || 0);

});



let score=50;



if(revenue > 1000)
score +=15;



if(sales.length > 10)
score +=10;



if(customers.length > 10)
score +=10;



const lowStock = products.filter(
p=>Number(p.stock)<=5
);



if(lowStock.length===0){

score +=15;

}else{

score -= lowStock.length * 2;

}



if(score>100)
score=100;


if(score<0)
score=0;



let status;


if(score>=85){

status="Excellent";

}
else if(score>=70){

status="Good";

}
else{

status="Needs Improvement";

}



res.json({

success:true,

score,

status,


analysis:{

revenue,

sales:sales.length,

customers:customers.length,

products:products.length,

lowStock:lowStock.length

},


advice:

score>=85

?
"Business performance is strong."

:
"AI recommends improving sales and inventory."

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
// 📈 AI SALES FORECAST
// =====================================


router.get("/forecast", async(req,res)=>{


try{


const {data:sales}=await supabase
.from("sales")
.select("*");


let revenue=0;


sales.forEach(s=>{

revenue += Number(s.amount || 0);

});



const prediction =
(sales.length>0)
?
(revenue/sales.length)*30
:
0;



res.json({

success:true,

currentRevenue:revenue,

nextMonthPrediction:
prediction.toFixed(2),


message:
"AI predicted next month revenue"

});


}

catch(error){

res.status(500).json({

error:error.message

});

}


});







// =====================================
// 📦 AI INVENTORY ALERT
// =====================================


router.get("/inventory",async(req,res)=>{


try{


const {data:products}=await supabase
.from("products")
.select("*");



const lowStock =
products.filter(
p=>Number(p.stock)<=5
);



res.json({

success:true,

lowStock,

message:
"AI inventory analysis completed"

});


}

catch(error){

res.status(500).json({

error:error.message

});

}


});







// =====================================
// 👥 AI CUSTOMER INSIGHTS
// =====================================


router.get("/customers",async(req,res)=>{


try{


const {data:customers}=await supabase
.from("customers")
.select("*");



const vip =
customers.filter(
c=>Number(c.total_purchase)>=1000
);



res.json({

success:true,

totalCustomers:
customers.length,

vipCustomers:
vip

});


}

catch(error){

res.status(500).json({

error:error.message

});

}


});







// =====================================
// 📊 AI DASHBOARD SUMMARY
// =====================================


router.get("/dashboard",async(req,res)=>{


try{


const sales =
await supabase
.from("sales")
.select("*");


const customers =
await supabase
.from("customers")
.select("*");


const products =
await supabase
.from("products")
.select("*");



res.json({

success:true,


sales:
sales.data.length,


customers:
customers.data.length,


products:
products.data.length


});


}

catch(error){

res.status(500).json({

error:error.message

});

}


});

// =====================================
// 🔔 AI NOTIFICATIONS
// =====================================

router.get("/notifications", async(req,res)=>{

try{


const notifications = [];


// PRODUCTS

const {data:products}=await supabase
.from("products")
.select("*");



const lowStock = products.filter(
product => Number(product.stock) <= 5
);



lowStock.forEach(product=>{


notifications.push({

type:"inventory",

icon:"📦",

message:
`${product.name || "Product"} stock is low. Stock: ${product.stock}`


});


});





// SALES

const {data:sales}=await supabase
.from("sales")
.select("*");



let revenue = 0;


sales.forEach(item=>{

revenue += Number(item.amount || 0);

});



if(revenue > 3000){


notifications.push({

type:"sales",

icon:"📈",

message:
`Revenue is strong. Total revenue: $${revenue}`

});


}






// CUSTOMERS

const {data:customers}=await supabase
.from("customers")
.select("*");



const vipCustomers =
customers.filter(
customer =>
Number(customer.total_purchase || 0) >= 1000
);



if(vipCustomers.length > 0){


notifications.push({

type:"customer",

icon:"👥",

message:
`${vipCustomers.length} VIP customers detected.`

});


}





// TOP PRODUCT

if(sales.length > 0){


const productCount={};


sales.forEach(item=>{


let name=item.product || "Product";


productCount[name] =
(productCount[name] || 0)+1;


});



const topProduct =
Object.keys(productCount)
.sort(
(a,b)=>productCount[b]-productCount[a]
)[0];



notifications.push({

type:"product",

icon:"⭐",

message:
`Best selling product: ${topProduct}`

});


}





res.json({

success:true,

count:
notifications.length,

notifications

});



}

catch(error){


res.status(500).json({

success:false,

error:error.message

});


}


});
// =================================
// 🔔 AI NOTIFICATIONS
// =================================

router.get("/notifications", async (req,res)=>{

try{


const notifications = [];

const supabase = require("../config/supabase");
// PRODUCTS CHECK

const {data:products,error:productError} =
await supabase
.from("products")
.select("*");


if(productError) throw productError;



products.forEach(product=>{


if(Number(product.stock) <= 5){


notifications.push({

type:"warning",

title:"Low Stock Alert",

message:
`${product.name} stock is only ${product.stock}. AI recommends restocking.`


});


}


});





// SALES CHECK

const {data:sales,error:salesError} =
await supabase
.from("sales")
.select("*");


if(salesError) throw salesError;



if(sales.length > 10){


notifications.push({

type:"success",

title:"Sales Growth",

message:
"AI detected strong sales activity. Business performance is improving."


});


}





// CUSTOMERS CHECK

const {data:customers,error:customerError} =
await supabase
.from("customers")
.select("*");


if(customerError) throw customerError;



customers.forEach(customer=>{


if(Number(customer.total_purchase) >= 1000){


notifications.push({

type:"vip",

title:"VIP Customer",

message:
`${customer.name} is a valuable customer. AI recommends special offers.`


});


}


});






res.json({

success:true,

count:notifications.length,

notifications


});



}

catch(error){


res.status(500).json({

success:false,

error:error.message

});


}


});
// ================================
// 🔔 GET SAVED NOTIFICATIONS
// ================================

router.get("/saved-notifications", async(req,res)=>{

try{


const {data,error}=await supabase
.from("notifications")
.select("*")
.order("created_at",{ascending:false});


if(error) throw error;


res.json({

success:true,

notifications:data

});


}
catch(error){

res.status(500).json({

success:false,

error:error.message

});

}


});




// ================================
// ✅ MARK AS READ
// ================================

router.put("/notifications/:id/read", async(req,res)=>{


try{


const {id}=req.params;



const {data,error}=await supabase
.from("notifications")
.update({

is_read:true

})
.eq("id",id);



if(error) throw error;



res.json({

success:true,

message:"Notification marked as read"

});


}
catch(error){

res.status(500).json({

success:false,

error:error.message

});


}


});

module.exports = router;