export default function RecentOrders({
orders=[]
}){


return(

<div className="orders-box">


<div className="orders-header">


<h3>

🛒 Recent Orders

</h3>


<span>

Latest

</span>


</div>




{

orders.length === 0 ?

(

<p className="empty">

No orders found

</p>

)

:

orders.slice(0,5).map((order)=>(


<div

className="order-item"

key={order.id}

>



<div>


<h4>

{order.customer || "Customer"}

</h4>


<p>

{order.product || "Product"}

</p>


</div>




<div className="order-right">


<b>

${order.amount}

</b>



<span

className={

order.status === "Completed"

?

"completed"

:

"pending"

}

>


{

order.status || "Pending"

}


</span>



</div>




</div>



))


}



</div>


);


}