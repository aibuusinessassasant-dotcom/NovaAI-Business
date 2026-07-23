function Analytics(){

  const stats = [
    {
      title: "Revenue",
      value: "$58,900",
      growth: "+18%",
      icon: "💰",
      label: "Monthly income"
    },
    {
      title: "Profit",
      value: "$24,300",
      growth: "+12%",
      icon: "📈",
      label: "Net profit"
    },
    {
      title: "Customers",
      value: "8,420",
      growth: "+20%",
      icon: "👥",
      label: "Active customers"
    }
  ];


  return (

    <section className="analytics">


      <div className="analytics-card">


        <div className="analytics-header">


          <div>

            <span className="analytics-badge">
              BUSINESS INTELLIGENCE
            </span>


            <h2>
              📊 Revenue Analytics
            </h2>


            <p>
              Real-time performance overview powered by Future AI.
            </p>

          </div>



          <button className="year-button">
            2026 ▾
          </button>


        </div>




        <div className="stats-row">


          {
            stats.map((stat,index)=>(

              <div 
                className="stat-card"
                key={index}
              >


                <div className="stat-top">


                  <span className="stat-icon">
                    {stat.icon}
                  </span>


                  <span className="growth">
                    ↑ {stat.growth}
                  </span>


                </div>



                <small>
                  {stat.title}
                </small>


                <h3>
                  {stat.value}
                </h3>


                <p>
                  {stat.label}
                </p>



              </div>


            ))
          }



        </div>


      </div>


    </section>

  );

}


export default Analytics;