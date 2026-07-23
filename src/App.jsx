import { Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";

import Dashboard from "./pages/Dashboard";
import CRM from "./pages/CRM";
import Sales from "./pages/Sales";
import Inventory from "./pages/Inventory";
import Reports from "./pages/Reports";
import AIAssistant from "./pages/AIAssistant";
import AISalesForecast from "./pages/AISalesForecast";
import Products from "./pages/Products";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Notifications from "./pages/Notifications";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import Orders from "./pages/Orders";
import AIInventoryAlert from "./pages/AIInventoryAlert";
import AICustomerInsights from "./pages/AICustomerInsights";
import LandingPage from "./pages/LandingPage";
import CompanySetup from "./pages/CompanySetup";

export default function App() {


return (

<Routes>
 
 <Route path="/landing" element={<LandingPage/>}/>

  <Route
path="/ai-customers"
element={<AICustomerInsights/>}
/>


<Route
path="/setup"
element={<CompanySetup/>}
/>
<Route
path="/ai-inventory"
element={<AIInventoryAlert/>}
/>

<Route path="orders" element={<Orders />} />
  

  <Route 
path="/products" 
element={<Products/>}
/>

<Route path="/notifications" element={<Notifications />} />

<Route path="/profile" element={<Profile />} />

<Route path="/settings" element={<Settings />} />



{/* AUTH */}

<Route 
path="/login" 
element={<Login />} 
/>


<Route 
path="/register" 
element={<Register />} 
/>




{/* MAIN APP */}

<Route element={<Layout/>}>


<Route 
path="/" 
element={<Dashboard/>}
/>


<Route 
path="/crm" 
element={<CRM/>}
/>


<Route 
path="/sales" 
element={<Sales/>}
/>


<Route 
path="/inventory" 
element={<Inventory/>}
/>


<Route 
path="/reports" 
element={<Reports/>}
/>


<Route 
path="/ai-assistant" 
element={<AIAssistant/>}
/>


<Route 
path="/ai-forecast" 
element={<AISalesForecast/>}
/>


</Route>



</Routes>

);

}