import { useEffect, useState } from "react";
import API from "../api/api";
import "../styles/ai-inventory.css";


export default function AIInventoryAlert(){

    const [products,setProducts] = useState([]);
    const [loading,setLoading] = useState(true);



    useEffect(()=>{

        getInventory();

    },[]);



    const getInventory = async()=>{

        try{

            const res = await API.get(
                "/ai-business/inventory"
            );


            setProducts(
                res.data.lowStock || []
            );


        }

        catch(error){

            console.log(
                "Inventory AI Error:",
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

                🤖 AI checking inventory...

            </div>

        );

    }




    return (

        <div className="ai-inventory-page">


            <div className="ai-title">

                <h1>
                    📦 AI Inventory Alert
                </h1>


                <p>
                    AI detects products with low stock
                </p>

            </div>





            {

            products.length === 0 ?


            (

                <div className="inventory-good">

                    ✅ All products have enough stock

                </div>

            )


            :


            (

                <div className="inventory-grid">


                {

                products.map((product)=>(


                    <div 
                    className="inventory-card"
                    key={product.id}
                    >


                        <h3>

                            {product.name}

                        </h3>



                        <p>

                            Current Stock:

                            <strong>
                                {product.stock}
                            </strong>

                        </p>



                        <div className="alert">

                            ⚠️ Low Stock

                        </div>



                        <span>

                            AI Recommendation:
                            Restock this product soon.

                        </span>


                    </div>


                ))

                }


                </div>

            )

            }



        </div>

    );

}