import "../styles/settings.css";


export default function Settings(){

return(

<div className="page">

<h1>⚙️ Settings</h1>


<div className="settings-grid">


<div className="setting-card">

<h2>Account</h2>

<p>
Manage your account information
</p>

<button>
Update
</button>

</div>



<div className="setting-card">

<h2>🤖 AI Assistant</h2>

<p>
Enable AI recommendations
</p>

<label className="switch">

<input type="checkbox"/>

<span></span>

</label>


</div>



<div className="setting-card">

<h2>🔔 Notifications</h2>

<p>
Receive business alerts
</p>


<label className="switch">

<input type="checkbox" checked readOnly/>

<span></span>

</label>


</div>


</div>


</div>

)

}