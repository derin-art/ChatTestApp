import ChatFooter from "./ChatFooter";
import ChatBody from "./ChatBody";
import { useState, useEffect } from "react";

export default function ChatPage({ socket, userName }) {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.on("messageResponse", (data) => setMessages([...messages, data]));
  }, [socket, messages]);
  let previousMessages;

  if (localStorage.getItem("chats")) {
    previousMessages = JSON.parse(localStorage.getItem("chats"));
  }

  return (
    <div>
      <ChatBody
        socket={socket}
        messages={messages}
        previousMessages={previousMessages}
      ></ChatBody>
      <ChatFooter socket={socket} userName={userName}></ChatFooter>
    </div>
  );
}
