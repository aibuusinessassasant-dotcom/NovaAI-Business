import { Link } from "react-router-dom";

import {
FaRobot,
FaChartLine,
FaBox,
FaUsers
} from "react-icons/fa";

import "../styles/landing.css";


export default function LandingPage(){


return (

<div className="landing-page">



{/* NAVBAR */}

<nav className="landing-nav">


<div className="brand">

🤖 NovaAI Business

</div>



<div className="nav-links">

<a href="#features">
Features
</a>

<a href="#ai">
AI Tools
</a>


<a href="#pricing">
Pricing
</a>


<a href="#contact">
Contact
</a>


</div>




<div className="nav-buttons">


<Link to="/login">
Login
</Link>


<Link 
to="/register"
className="start-btn"
>

Start Free

</Link>


</div>


</nav>








{/* HERO */}


<section className="landing-hero">


<div className="hero-content">


<span className="hero-badge">

🤖 AI POWERED BUSINESS PLATFORM

</span>



<h1>

Grow Your Business
With Artificial Intelligence

</h1>



<p>

Analyze sales, predict revenue,
manage inventory and understand
customers using AI.

</p>




<div className="hero-actions">


<Link
to="/register"
className="primary-btn"
>

Start Free

</Link>



<Link
to="/login"
className="secondary-btn"
>

Demo Login

</Link>


</div>


</div>





<div className="ai-circle">


🤖


</div>


</section>








{/* STATS */}


<section className="stats-section">


<div>

<h2>

10,000+

</h2>

<p>
Businesses
</p>

</div>



<div>

<h2>

99%

</h2>

<p>
AI Accuracy
</p>

</div>





<div>

<h2>

24/7

</h2>

<p>
AI Support
</p>

</div>



</section>









{/* FEATURES */}


<section id="features"
className="features">


<h2>

Everything Your Business Needs

</h2>



<div className="feature-grid">



<div className="feature-card">

<FaRobot/>

<h3>
AI Assistant
</h3>

<p>
Ask AI about your business.
</p>

</div>




<div className="feature-card">

<FaChartLine/>

<h3>
Sales Forecast
</h3>

<p>
Predict future revenue.
</p>

</div>





<div className="feature-card">

<FaBox/>

<h3>
Smart Inventory
</h3>

<p>
Detect low stock.
</p>

</div>





<div className="feature-card">

<FaUsers/>

<h3>
Customer Insights
</h3>

<p>
Find VIP customers.
</p>

</div>



</div>


</section>









{/* PRICING */}


<section id="pricing"
className="pricing">


<h2>

Choose Your Plan

</h2>



<div className="pricing-grid">



<div className="price-card">


<h3>
Free
</h3>


<h1>
$0/month
</h1>


<p>
✓ Dashboard
</p>


<p>
✓ Basic AI
</p>


<Link to="/register">
Start
</Link>


</div>







<div className="price-card premium">


<h3>
Professional
</h3>


<h1>
$19/month
</h1>


<p>
✓ AI Forecast
</p>


<p>
✓ Reports
</p>


<p>
✓ Customer Insights
</p>


<Link to="/register">
Start
</Link>


</div>







<div className="price-card">


<h3>
Business
</h3>


<h1>
$49/month
</h1>


<p>
✓ Team Users
</p>


<p>
✓ Advanced AI
</p>


<Link to="/register">
Start
</Link>


</div>




</div>


</section>









{/* CTA */}


<section className="landing-cta">


<h2>

Ready to make your business smarter?

</h2>



<Link
to="/register"
className="primary-btn"
>

Create Workspace

</Link>


</section>




</div>


);


}