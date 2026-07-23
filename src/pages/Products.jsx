import {
  FaBoxOpen,
  FaPlus,
  FaSearch
} from "react-icons/fa";

import "../styles/products.css";


export default function Products(){


const products=[

{
name:"Business Software",
category:"Software",
price:"$2500",
stock:"120"
},

{
name:"Cloud Service",
category:"Service",
price:"$1800",
stock:"80"
},

{
name:"AI Assistant Pro",
category:"AI",
price:"$5000",
stock:"45"
}

];


return (

<div className="products-page">


<div className="products-header">


<div>

<h1>
📦 Products Management
</h1>

<p>
Manage your business products and inventory
</p>

</div>



<button className="add-product">

<FaPlus/>

Add Product

</button>


</div>





<div className="product-search">

<FaSearch/>

<input 
placeholder="Search products..."
/>

</div>







<div className="products-grid">


{

products.map((product,index)=>(


<div className="product-card" key={index}>


<div className="product-icon">

<FaBoxOpen/>

</div>


<h2>
{product.name}
</h2>


<p>
Category: {product.category}
</p>


<h3>
{product.price}
</h3>


<span>
Stock: {product.stock}
</span>


</div>


))


}


</div>





<div className="ai-product-box">


<h2>
🤖 AI Product Insight
</h2>


<p>

AI recommends increasing AI Assistant Pro stock because demand is growing.

</p>


</div>



</div>

)

}