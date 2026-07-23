import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";


export default function ThemeToggle(){

const [dark,setDark] = useState(true);



useEffect(()=>{

const saved =
localStorage.getItem("theme");


if(saved==="light"){

document.body.classList.add("light");

setDark(false);

}


},[]);




const toggleTheme=()=>{


if(dark){

document.body.classList.add("light");

localStorage.setItem(
"theme",
"light"
);


setDark(false);


}else{


document.body.classList.remove("light");

localStorage.setItem(
"theme",
"dark"
);


setDark(true);


}


};




return(

<button

className="theme-toggle"

onClick={toggleTheme}

>


{

dark ?

<FaSun/>

:

<FaMoon/>

}


</button>


);


}