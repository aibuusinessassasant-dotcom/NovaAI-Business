import { useEffect, useState } from "react";
import API from "../api/api";
import "../styles/ai-forecast.css";


export default function AISalesForecast(){

    const [forecast,setForecast] = useState(null);
    const [loading,setLoading] = useState(true);



    useEffect(()=>{

        getForecast();

    },[]);



    const getForecast = async()=>{

        try{

            const res = await API.get(
                "/ai-business/forecast"
            );


            setForecast(res.data.data);


        }

        catch(error){

            console.log(
                "Forecast Error:",
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

                🤖 AI is analyzing sales...

            </div>

        );

    }



    return (

        <div className="ai-forecast-page">


            <div className="ai-forecast-header">

                <h1>
                    📊 AI Sales Forecast
                </h1>

                <p>
                    AI prediction based on your sales history
                </p>

            </div>





            <div className="forecast-grid">


                <div className="forecast-card">

                    <h3>
                        Total Revenue
                    </h3>

                    <strong>
                        ${forecast?.totalRevenue || 0}
                    </strong>

                </div>





                <div className="forecast-card">

                    <h3>
                        Average Sale
                    </h3>

                    <strong>
                        ${forecast?.averageSale || 0}
                    </strong>

                </div>






                <div className="forecast-card ai-main">

                    <h3>
                        Next Month Prediction 🚀
                    </h3>


                    <strong>
                        ${forecast?.nextMonthPrediction || 0}
                    </strong>


                    <p>

                    {forecast?.growth}

                    </p>


                </div>



            </div>



        </div>

    );

}