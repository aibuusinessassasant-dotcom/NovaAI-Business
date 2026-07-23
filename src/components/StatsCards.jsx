import {
  FaUsers,
  FaShoppingCart,
  FaBoxOpen,
  FaDollarSign,
  FaArrowUp
} from "react-icons/fa";

import "../styles/statscards.css";

export default function StatsCards({
  customers,
  sales,
  products,
  revenue
}) {

  const cards = [

    {
      title:"Revenue",
      value:`$${revenue.toLocaleString()}`,
      icon:<FaDollarSign/>,
      color:"blue",
      growth:"+18%",
      subtitle:"This Month"
    },

    {
      title:"Sales",
      value:sales.length,
      icon:<FaShoppingCart/>,
      color:"purple",
      growth:"+12%",
      subtitle:"Completed Orders"
    },

    {
      title:"Customers",
      value:customers.length,
      icon:<FaUsers/>,
      color:"green",
      growth:"+8%",
      subtitle:"New Customers"
    },

    {
      title:"Products",
      value:products.length,
      icon:<FaBoxOpen/>,
      color:"orange",
      growth:"Active",
      subtitle:"Inventory"
    }

  ];

  return (

    <div className="stats-grid">

      {cards.map((card,index)=>(

        <div
          key={index}
          className={`stats-card ${card.color}`}
        >

          <div className="stats-top">

            <div className="stats-icon">

              {card.icon}

            </div>

            <span className="stats-growth">

              <FaArrowUp/>

              {card.growth}

            </span>

          </div>

          <h2>

            {card.value}

          </h2>

          <h4>

            {card.title}

          </h4>

          <p>

            {card.subtitle}

          </p>

          <div className="progress">

            <div className="progress-fill"></div>

          </div>

        </div>

      ))}

    </div>

  );

}