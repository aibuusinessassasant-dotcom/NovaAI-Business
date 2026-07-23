import {
  FaRobot,
  FaChartLine,
  FaLightbulb
} from "react-icons/fa";

import "../styles/aiInsight.css";


export default function AIInsight(){

return (

<div className="ai-insight-card">


<div className="ai-title">

<div className="ai-icon">

<FaRobot />

</div>


<div>

<h2>
AI Business Insight
</h2>

<p>
Smart recommendations from AI
</p>

</div>

</div>



<div className="ai-content">


<div className="insight-item">

<FaChartLine />

<div>

<h4>
Sales Prediction
</h4>

<p>
Your sales are expected to grow by 
<strong> 24% </strong>
next month.
</p>

</div>

</div>



<div className="insight-item">

<FaLightbulb />

<div>

<h4>
Business Recommendation
</h4>

<p>
Focus marketing campaigns on your VIP customers.
</p>

</div>

</div>


</div>



<button className="ai-button">

Generate New Analysis

</button>


</div>

);

}