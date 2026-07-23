import {FaBars} from "react-icons/fa";

import "../styles/hamburger.css";


export default function Hamburger({open,setOpen}){


return(

<button

className="hamburger"

onClick={()=>setOpen(!open)}

>

<FaBars/>

</button>

);


}