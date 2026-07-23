import "../styles/orders.css";

export default function Orders(){

const orders = [
    {
        id:"#1024",
        customer:"Ahmed Ali",
        product:"Laptop",
        amount:"$1200",
        status:"Completed"
    },
    {
        id:"#1025",
        customer:"Cawo Business",
        product:"Software Plan",
        amount:"$300",
        status:"Pending"
    },
    {
        id:"#1026",
        customer:"Mohamed",
        product:"Phone",
        amount:"$500",
        status:"Processing"
    }
];


return(

<div className="orders-page">

<h1>📦 Orders</h1>


<div className="orders-card">


<table>

<thead>

<tr>
<th>Order ID</th>
<th>Customer</th>
<th>Product</th>
<th>Amount</th>
<th>Status</th>
</tr>

</thead>


<tbody>

{
orders.map((order,index)=>(

<tr key={index}>

<td>{order.id}</td>

<td>{order.customer}</td>

<td>{order.product}</td>

<td>{order.amount}</td>

<td>
<span className="status">
{order.status}
</span>
</td>

</tr>

))
}

</tbody>

</table>


</div>


</div>

)

}