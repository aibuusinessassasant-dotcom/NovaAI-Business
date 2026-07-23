import { 
  FaBox,
  FaSearch,
  FaPlus,
  FaTrash,
  FaEdit,
  FaExclamationTriangle
} from "react-icons/fa";

import { useState } from "react";

import "../styles/inventory.css";


export default function Inventory(){


const [products,setProducts] = useState([

{
id:1,
name:"MacBook Pro",
category:"Laptop",
stock:42,
price:1800
},

{
id:2,
name:"iPhone 16",
category:"Mobile",
stock:8,
price:1200
},

{
id:3,
name:"Office Monitor",
category:"Office",
stock:65,
price:350
}

]);


const [search,setSearch] = useState("");



function deleteProduct(id){

setProducts(
products.filter(
(product)=>product.id !== id
)
);

}



const filteredProducts = products.filter(
(product)=>
product.name
.toLowerCase()
.includes(search.toLowerCase())
);



const totalValue = products.reduce(
(sum,item)=>
sum + (item.price * item.stock),
0
);



return (

<div className="inventory-page">


{/* HEADER */}

<div className="inventory-header">

<div>

<h1>
📦 Inventory Management
</h1>

<p>
Manage your products and stock levels
</p>

</div>


<button className="add-product">

<FaPlus/>

Add Product

</button>


</div>





{/* STATS */}

<div className="inventory-cards">


<div className="inventory-card">

<FaBox/>

<div>

<h4>
Total Products
</h4>

<h2>
{products.length}
</h2>

</div>

</div>



<div className="inventory-card">

<FaBox/>

<div>

<h4>
Stock Items
</h4>

<h2>
115
</h2>

</div>

</div>




<div className="inventory-card warning">

<FaExclamationTriangle/>

<div>

<h4>
Low Stock
</h4>

<h2>
1
</h2>

</div>

</div>





<div className="inventory-card">

<FaBox/>

<div>

<h4>
Inventory Value
</h4>

<h2>
${totalValue}
</h2>

</div>

</div>


</div>





{/* SEARCH */}

<div className="inventory-search">

<FaSearch/>

<input

placeholder="Search products..."

value={search}

onChange={(e)=>setSearch(e.target.value)}

/>


</div>






{/* TABLE */}


<div className="products-box">


<div className="table-head">

<span>
Product
</span>

<span>
Category
</span>

<span>
Stock
</span>

<span>
Price
</span>

<span>
Action
</span>


</div>




{

filteredProducts.map(product=>(


<div className="product-row" key={product.id}>


<div>

<h3>
{product.name}
</h3>

<p>
{product.category}
</p>

</div>


<span>

{
product.stock < 10 ?

<span className="low-stock">
{product.stock} Low
</span>

:

<span className="in-stock">
{product.stock}
</span>

}

</span>



<strong>
${product.price}
</strong>



<div className="actions">


<button className="edit">

<FaEdit/>

</button>


<button

className="delete"

onClick={()=>deleteProduct(product.id)}

>

<FaTrash/>

</button>


</div>



</div>


))


}


</div>





{/* AI */}

<div className="ai-inventory">


<h2>
🤖 AI Inventory Insight
</h2>


<p>

AI detected that some products may run out soon.
Consider restocking low inventory items.

</p>


<button>
View AI Report
</button>


</div>



</div>

)

}