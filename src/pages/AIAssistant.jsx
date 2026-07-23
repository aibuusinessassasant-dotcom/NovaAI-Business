import { useState } from "react";
import API from "../api/api";
import { FaRobot, FaPaperPlane } from "react-icons/fa";
import "../styles/ai-assistant.css";

export default function AIAssistant() {

  const [message, setMessage] = useState("");

  const [messages, setMessages] = useState([
    {
      sender: "ai",
      text: "👋 Hello! I am your AI Business Assistant. I can help you with sales, customers, inventory and reports."
    }
  ]);

  const [loading, setLoading] = useState(false);



  const sendMessage = async () => {

    if (!message.trim()) return;


    const userText = message;


    setMessages((prev) => [
      ...prev,
      {
        sender: "user",
        text: userText
      }
    ]);


    setMessage("");
    setLoading(true);



    try {

      const res = await API.post("/ai/chat", {
        message: userText
      });


      console.log("AI RESPONSE:", res.data);


      setMessages((prev) => [
        ...prev,
        {
          sender: "ai",
          text: res.data.reply
        }
      ]);


    } catch (error) {


      console.error(
        "AI ERROR:",
        error.response || error.message
      );


      setMessages((prev) => [
        ...prev,
        {
          sender:"ai",
          text:"❌ AI connection failed"
        }
      ]);


    } finally {

      setLoading(false);

    }

  };




  return (

    <div className="ai-chat-box">


      <div className="ai-header">

        <div className="robot">
          <FaRobot />
        </div>


        <div>

          <h3>
            AI Business Assistant
          </h3>

          <span>
            Online • Gemma3 AI
          </span>

        </div>

      </div>





      <div className="ai-messages">


        {messages.map((msg,index)=>(

          <div
          key={index}
          className={
            msg.sender === "user"
            ? "user-message"
            : "ai-message"
          }
          >

            {msg.text}

          </div>

        ))}



        {loading && (

          <div className="ai-message">
            🤖 Thinking...
          </div>

        )}


      </div>





      <div className="ai-input">


        <input

          type="text"

          placeholder="Ask your AI Business Assistant..."

          value={message}

          onChange={(e)=>setMessage(e.target.value)}

          onKeyDown={(e)=>{

            if(e.key === "Enter"){
              sendMessage();
            }

          }}

        />



        <button
          onClick={sendMessage}
          disabled={loading}
        >

          <FaPaperPlane />

        </button>


      </div>



    </div>

  );

}