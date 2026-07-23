function EnterpriseWidgets(){


  const actions = [
    {
      icon:"👤",
      text:"Add Customer"
    },
    {
      icon:"🧾",
      text:"Create Invoice"
    },
    {
      icon:"📦",
      text:"Add Product"
    },
    {
      icon:"📄",
      text:"Generate Report"
    }
  ];



  const notifications = [
    {
      icon:"🟢",
      text:"New order received",
      time:"2 min ago"
    },
    {
      icon:"⚠️",
      text:"Inventory stock is low",
      time:"10 min ago"
    },
    {
      icon:"💰",
      text:"Payment completed",
      time:"30 min ago"
    }
  ];



  const activities = [
    "Ahmed purchased Premium Plan",
    "Inventory updated successfully",
    "New customer registered"
  ];



  return(


    <div className="enterprise-widgets">



      {/* AI Prediction */}

      <section className="widget ai-prediction">


        <div className="widget-header">

          <span className="ai-status">
            AI POWERED
          </span>


          <h2>
            🤖 AI Prediction
          </h2>


        </div>



        <p>
          Revenue is expected to increase
          <strong> +15% </strong>
          next week.
        </p>



        <ul>

          <li>
            ✔ Increase marketing campaigns
          </li>

          <li>
            ✔ Restock high-demand products
          </li>

          <li>
            ✔ Engage VIP customers
          </li>

        </ul>


      </section>





      {/* Quick Actions */}

      <section className="widget">


        <h2>
          ⚡ Quick Actions
        </h2>



        <div className="actions">


          {
            actions.map((action,index)=>(

              <button key={index}>

                {action.icon}
                <span>
                  {action.text}
                </span>

              </button>

            ))
          }


        </div>


      </section>





      {/* Notifications */}

      <section className="widget">


        <h2>
          🔔 Notifications
        </h2>



        <div className="notification-list">


        {
          notifications.map((item,index)=>(

            <div 
              className="notification"
              key={index}
            >

              <span>
                {item.icon}
              </span>

              <div>

                <p>
                  {item.text}
                </p>

                <small>
                  {item.time}
                </small>

              </div>


            </div>

          ))
        }


        </div>


      </section>






      {/* Activity */}

      <section className="widget">


        <h2>
          📋 Recent Activity
        </h2>



        <div className="activity">


        {
          activities.map((item,index)=>(

            <p key={index}>
              ● {item}
            </p>

          ))
        }


        </div>


      </section>






      {/* Performance */}

      <section className="widget performance">


        <h2>
          📊 Performance
        </h2>



        <div className="metric">

          <span>
            Sales Growth
          </span>

          <strong>
            +18%
          </strong>

        </div>



        <div className="metric">

          <span>
            Customer Growth
          </span>

          <strong>
            +20%
          </strong>

        </div>



      </section>



    </div>


  )

}



export default EnterpriseWidgets;