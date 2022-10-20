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
    <div className="flex flex-col items-center justify-center w-screen h-screen">
      <div className="border h-96 w-96 relative">
        {" "}
        <ChatBody
          userName={userName}
          socket={socket}
          messages={messages}
          previousMessages={previousMessages}
        ></ChatBody>
        <div className="absolute bottom-0">
          {" "}
          <ChatFooter socket={socket} userName={userName}></ChatFooter>
        </div>
      </div>
    </div>
  );
}
