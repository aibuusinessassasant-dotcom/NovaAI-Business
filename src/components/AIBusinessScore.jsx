import { useEffect, useState } from "react";
import API from "../api/api";
import "../styles/ai-score.css";

export default function AIBusinessScore() {

  const [score, setScore] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");



  useEffect(() => {

    getBusinessScore();

  }, []);




  const getBusinessScore = async () => {

    try {

      setLoading(true);

      const response = await API.get("/ai/score");


      setScore(response.data);


    } catch (err) {


      console.log(
        "AI Business Score Error:",
        err
      );


      setError(
        "AI Score unavailable. Check backend server."
      );


    } finally {

      setLoading(false);

    }

  };





  if (loading) {

    return (

      <div className="ai-score-card loading">

        🤖 AI analyzing business...

      </div>

    );

  }





  if (error || !score) {

    return (

      <div className="ai-score-card error">

        ⚠️

        <h3>
          AI Business Score
        </h3>

        <p>
          {error || "No data available"}
        </p>


        <button
          onClick={getBusinessScore}
        >
          Retry
        </button>


      </div>

    );

  }






  return (

    <div className="ai-score-card">



      <div className="score-header">


        <div>

          <h2>
            🤖 AI Business Score
          </h2>

          <p>
            Real-time business analysis
          </p>

        </div>



        <span className="ai-online">

          AI Online

        </span>


      </div>







      <div className="score-main">


        <div className="score-circle">


          <strong>

            {score.score}

          </strong>


          <small>
            /100
          </small>


        </div>




        <div>


          <h3>

            {score.status}

          </h3>


          <p>

            {score.advice}

          </p>


        </div>


      </div>







      <div className="score-grid">



        <div className="score-box">

          💰

          <span>
            Revenue
          </span>


          <b>
            ${score.analysis?.revenue || 0}
          </b>


        </div>





        <div className="score-box">

          🛒

          <span>
            Sales
          </span>


          <b>
            {score.analysis?.sales || 0}
          </b>


        </div>







        <div className="score-box">

          👥

          <span>
            Customers
          </span>


          <b>
            {score.analysis?.customers || 0}
          </b>


        </div>







        <div className="score-box">

          📦

          <span>
            Low Stock
          </span>


          <b>
            {score.analysis?.lowStock || 0}
          </b>


        </div>



      </div>






    </div>

  );

}