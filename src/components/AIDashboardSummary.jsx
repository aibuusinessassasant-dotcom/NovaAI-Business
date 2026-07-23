export default function AIDashboardSummary({summary}){


if(!summary) return null;


return (

<section className="ai-summary-grid">


<div className="glass-card">
<h3>💰 Revenue</h3>
<h1>${summary.revenue}</h1>
<p>Total Business Revenue</p>
</div>



<div className="glass-card">
<h3>🛒 Sales</h3>
<h1>{summary.sales}</h1>
<p>Completed Sales</p>
</div>



<div className="glass-card">
<h3>👥 VIP Customers</h3>
<h1>{summary.vipCustomers}</h1>
<p>Premium Customers</p>
</div>



<div className="glass-card">
<h3>📦 Stock Alerts</h3>
<h1>{summary.stockAlerts}</h1>
<p>AI Inventory Warning</p>
</div>



</section>

);

}