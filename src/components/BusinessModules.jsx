import { Link } from "react-router-dom";


function BusinessModules(){

  const modules = [

    {
      icon:"👥",
      title:"CRM",
      desc:"Manage customer relationships and improve engagement.",
      link:"/crm",
      status:"Active"
    },

    {
      icon:"💰",
      title:"Sales",
      desc:"Track deals, revenue and sales performance.",
      link:"/sales",
      status:"Active"
    },

    {
      icon:"📦",
      title:"Inventory",
      desc:"Control products, stock levels and supplies.",
      link:"/inventory",
      status:"Monitor"
    },

    {
      icon:"📊",
      title:"Reports",
      desc:"Advanced analytics and business intelligence.",
      link:"/reports",
      status:"AI Powered"
    },

    {
      icon:"🤖",
      title:"AI Assistant",
      desc:"Smart recommendations for your business.",
      link:"/ai",
      status:"Beta"
    },

    {
      icon:"💳",
      title:"Finance",
      desc:"Manage payments, expenses and profits.",
      link:"/finance",
      status:"Coming Soon"
    }

  ];



  return (

    <section className="modules">


      <div className="modules-header">


        <span className="module-badge">
          ENTERPRISE PLATFORM
        </span>


        <h2>
          🚀 Business Modules
        </h2>


        <p>
          Powerful tools to run and scale your business with Future AI.
        </p>


      </div>




      <div className="module-grid">


        {
          modules.map((item,index)=>(


            <Link

              to={item.link}

              className="module-card"

              key={index}

            >


              <div className="module-icon">
                {item.icon}
              </div>



              <div className="module-content">


                <h3>
                  {item.title}
                </h3>


                <p>
                  {item.desc}
                </p>



                <div className="module-footer">


                  <span className="module-status">
                    {item.status}
                  </span>


                  <span className="module-link">
                    Open →
                  </span>


                </div>



              </div>



            </Link>


          ))
        }



      </div>


    </section>

  );

}


export default BusinessModules;