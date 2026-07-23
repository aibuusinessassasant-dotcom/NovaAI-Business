import { useState } from "react";
import API from "../api/api";
import { FaRobot, FaPaperPlane } from "react-icons/fa";
import "../styles/ai-assistant.css";

export default function AIAssistant() {
  const [message, setMessage] = useState("");
  const [reply, setReply] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!message.trim()) return;

    try {
      setLoading(true);

      const res = await API.post("/ai/chat", {
        message,
      });

      console.log("AI Response:", res.data);

      setReply(res.data.reply || "No response from AI");
      setMessage("");
    } catch (error) {
      console.error("Frontend Error:", error);

      if (error.response) {
        console.error("Status:", error.response.status);
        console.error("Data:", error.response.data);

        setReply(
          error.response.data.error ||
            "Backend returned an error."
        );
      } else if (error.request) {
        console.error("No response from backend");

        setReply(
          "Cannot connect to backend. Make sure server.js is running."
        );
      } else {
        console.error(error.message);
        setReply(error.message);
      }
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
          <h3>AI Business Assistant</h3>
          <span>Online • Gemma3 AI</span>
        </div>
      </div>

      <div className="ai-response">
        {loading ? (
          <p>🤖 Thinking...</p>
        ) : (
          <p>{reply || "👋 Hello! Ask me anything about your business."}</p>
        )}
      </div>

      <div className="ai-input">
        <input
          type="text"
          placeholder="Ask AI..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              sendMessage();
            }
          }}
        />

        <button onClick={sendMessage} disabled={loading}>
          <FaPaperPlane />
        </button>
      </div>
    </div>
  );
}