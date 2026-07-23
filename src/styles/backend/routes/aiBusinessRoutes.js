const express = require("express");
const router = express.Router();

const supabase = require("../config/supabase");




// 📊 AI SALES FORECAST

router.get("/forecast", async(req,res)=>{


try{


const {data:sales,error}=await supabase
.from("sales")
.select("*");



if(error) throw error;



let revenue = 0;


sales.forEach(item=>{

revenue += Number(item.amount || 0);

});



const average = sales.length
? revenue / sales.length
:0;



const prediction = average * 30;



res.json({

success:true,

title:"AI Sales Forecast",

data:{


totalRevenue:revenue.toFixed(2),


averageSale:average.toFixed(2),


nextMonthPrediction:prediction.toFixed(2),


message:
"AI predicts future revenue based on previous sales"


}


});



}

catch(error){


res.status(500).json({

success:false,

error:error.message

});


}


});









// 📦 AI INVENTORY ALERT


router.get("/inventory",async(req,res)=>{


try{


const {data:products,error}=await supabase

.from("products")

.select("*");



if(error) throw error;




const lowStock = products.filter(product=>

Number(product.stock) <= 5

);





res.json({

success:true,

title:"AI Inventory Alert",

data:{

lowStock,

message:

lowStock.length > 0

?

"Some products need restocking"

:

"All products have enough stock"


}


});



}

catch(error){


res.status(500).json({

success:false,

error:error.message

});


}



});









// 👥 AI CUSTOMER INSIGHTS


router.get("/customers",async(req,res)=>{


try{


const {data:customers,error}=await supabase

.from("customers")

.select("*");



if(error) throw error;




const vipCustomers = customers.filter(customer=>

Number(customer.total_purchase || 0) >= 1000

);




res.json({

success:true,

title:"AI Customer Insights",

data:{


vipCustomers,


message:

"AI identified high value customers"


}


});




}

catch(error){


res.status(500).json({

success:false,

error:error.message

});


}



});









// 🤖 AI BUSINESS ANALYSIS


router.post("/analyze-business",async(req,res)=>{


try{


const {data:sales}=await supabase

.from("sales")

.select("*");



const {data:products}=await supabase

.from("products")

.select("*");



const {data:customers}=await supabase

.from("customers")

.select("*");







const prompt = `


You are an AI Business Analyst.


Analyze this business:


Sales:

${JSON.stringify(sales)}



Products:

${JSON.stringify(products)}



Customers:

${JSON.stringify(customers)}



Give report:


📈 Sales Forecast

📦 Inventory Alerts

👥 VIP Customers

💡 Business Recommendations



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


}

);





const result = await response.json();




res.json({

success:true,

analysis:result.response


});



}

catch(error){


console.log(
"AI ERROR:",
error.message
);



res.status(500).json({

success:false,

error:error.message

});


}


});





module.exports = router;