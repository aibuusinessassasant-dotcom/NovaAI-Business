function Card({icon,title,value,growth}){


return(

<div className="card">


<div className="card-top">


<div className="card-icon">

{icon}

</div>


<span className="growth">

{growth}

</span>


</div>




<h3>
{title}
</h3>



<h1>
{value}
</h1>



<p>
Compared to last month
</p>



</div>

)

}


export default Card;