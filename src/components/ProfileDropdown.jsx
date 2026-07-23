import {useState} from "react";
import {
FaUser,
FaCog,
FaSignOutAlt
} from "react-icons/fa";


export default function ProfileDropdown(){


const [open,setOpen]=useState(false);



return(

<div className="profile-wrapper">



<button

className="profile-btn"

onClick={()=>setOpen(!open)}

>


<div className="avatar">

A

</div>


<div>

<b>

Admin

</b>


<small>

AI Manager

</small>

</div>


</button>






{

open &&

<div className="profile-menu">


<div>

<FaUser/>

Profile

</div>


<div>

<FaCog/>

Settings

</div>


<div>

<FaSignOutAlt/>

Logout

</div>



</div>

}



</div>


);


}