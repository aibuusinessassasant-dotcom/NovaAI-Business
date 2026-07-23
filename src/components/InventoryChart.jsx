export default function InventoryChart({
products=[]
}){


return(

<div className="inventory-box">


<div className="inventory-header">

<h3>
📦 Inventory Status
</h3>


<span className="stock-live">

Live

</span>


</div>





{

products.length === 0 ? (

<p className="empty">

No products available

</p>

)

:

products.map((product)=>(


<div

className="inventory-item"

key={product.id}

>


<div>


<h4>

{product.name}

</h4>


<p>

Stock: {product.stock}

</p>


</div>





<span

className={

product.stock < 10

?

"low-stock"

:

"good-stock"

}

>


{

product.stock < 10

?

"Low Stock"

:

"Available"

}


</span>




</div>


))


}



</div>


);


}