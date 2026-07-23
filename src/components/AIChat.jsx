import {useState} from "react";

import {FaRobot} from "react-icons/fa";

import "../styles/aichat.css";


function AIChat(){


const [open,setOpen]=useState(false);



return (

<>


<button
className="ai-floating"
onClick={()=>setOpen(!open)}
>

🤖

</button>



{
open &&

<div className="chat-box">


<h3>
<FaRobot/>
 AI Assistant
</h3>


<p>
Hello 👋 How can I help your business today?
</p>


<input

placeholder="Ask AI..."

/>


</div>

}


</>

)

}


export default AIChat;