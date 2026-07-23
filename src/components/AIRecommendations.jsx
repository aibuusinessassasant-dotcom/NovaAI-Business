export default function AIRecommendations({
sales=[],
products=[]
}){


const recommendations=[


{
icon:"📈",
title:"Sales Performance",
text:"Sales performance is improving based on recent activity.",
type:"success"
},



{
icon:"🚀",
title:"Marketing Opportunity",
text:"Launch campaigns for your best selling products.",
type:"blue"
},



{
icon:"💡",
title:"Inventory Advice",
text:"AI suggests increasing stock for popular products.",
type:"warning"
}



];




return(

<div className="ai-recommendations">


<div className="ai-header">


<span>

🤖 AI Insights

</span>


<div className="ai-online">

AI Online

</div>


</div>





{

recommendations.map((item,index)=>(


<div

className={`ai-card ${item.type}`}

key={index}

>


<div className="ai-icon">

{item.icon}

</div>



<div>


<h4>

{item.title}

</h4>



<p>

{item.text}

</p>


</div>



</div>



))

}




</div>


);


}