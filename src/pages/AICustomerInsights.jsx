import { useEffect, useState } from "react";
import API from "../api/api";
import "../styles/ai-customers.css";


export default function AICustomerInsights(){


    const [customers,setCustomers] = useState([]);

    const [loading,setLoading] = useState(true);



    useEffect(()=>{

        getCustomers();

    },[]);




    const getCustomers = async()=>{

        try{

            const res = await API.get(
                "/ai-business/customers"
            );


            setCustomers(
                res.data.vipCustomers || []
            );


        }

        catch(error){

            console.log(
                "Customer AI Error:",
                error
            );

        }

        finally{

            setLoading(false);

        }

    };





    if(loading){

        return (

            <div className="ai-loading">

                🤖 AI analyzing customers...

            </div>

        );

    }





    return (

        <div className="ai-customers-page">


            <div className="ai-title">


                <h1>
                    👥 AI Customer Insights
                </h1>


                <p>
                    AI identifies valuable customers
                </p>


            </div>





            {
                customers.length === 0 ?


                (

                    <div className="customer-empty">

                        No VIP customers found

                    </div>

                )


                :


                (

                <div className="customer-grid">


                {
                customers.map((customer)=>(


                    <div 
                    className="customer-card"
                    key={customer.id}
                    >


                        <h3>

                            ⭐ {customer.name}

                        </h3>



                        <p>

                            Email:
                            <br />

                            {customer.email}

                        </p>




                        <h4>

                            💰 Total Purchase:

                        </h4>



                        <strong>

                            ${customer.total_purchase}

                        </strong>




                        <div className="customer-ai">


                            👑 VIP Customer

                            <br/>

                            AI Recommendation:

                            <br/>

                            Give loyalty rewards

                            and special offers.


                        </div>



                    </div>


                ))

                }


                </div>

                )

            }



        </div>

    );


}