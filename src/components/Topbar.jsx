import { 
FaSearch,
FaBell,
FaChevronDown
} from "react-icons/fa";

import {useState} from "react";

import "../styles/topbar.css";


export default function Topbar(){


const [profile,setProfile]=useState(false);


return(

<header className="topbar">


{/* SEARCH */}

<div className="search-box">


<FaSearch/>


<input

placeholder="Search customers, sales, reports..."

/>


</div>





{/* RIGHT AREA */}

<div className="topbar-actions">



{/* NOTIFICATION */}


<button className="notification">


<FaBell/>


<span>

3

</span>


</button>





{/* PROFILE */}


<div className="profile-area">


<button

className="profile-button"

onClick={()=>setProfile(!profile)}

>


<div className="avatar">

A

</div>


<div className="profile-text">


<b>

Admin

</b>


<small>

AI Manager

</small>


</div>


<FaChevronDown/>


</button>





{

profile &&

<div className="profile-dropdown">


<div>

👤 Profile

</div>


<div>

⚙ Settings

</div>


<div>

🚪 Logout

</div>


</div>


}



</div>




</div>


</header>


);


}