import ChatFooter from "./ChatFooter";
import ChatBody from "./ChatBody";
import { useState, useEffect } from "react";

export default function ChatPage({ socket }) {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.on("messageResponse", (data) => setMessages([...messages, data]));
  }, [socket, messages]);
  return (
    <div>
      <ChatBody socket={socket} messages={messages}></ChatBody>
      <ChatFooter socket={socket}></ChatFooter>
    </div>
  );
}
