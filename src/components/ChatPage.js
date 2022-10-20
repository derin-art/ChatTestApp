import ChatFooter from "./ChatFooter";
import ChatBody from "./ChatBody";
import { useState, useEffect } from "react";

export default function ChatPage({ socket, userName }) {
  const [messages, setMessages] = useState([]);
  const [page, setPage] = useState(0);

  useEffect(() => {
    socket.on("messageResponse", (data) => setMessages([...messages, data]));
  }, [socket, messages]);
  let previousMessages;

  if (localStorage.getItem("chats")) {
    previousMessages = JSON.parse(localStorage.getItem("chats"));
  }

  const onScroll = (e) => {
    console.log("sr", e.target.scrollTop);
  };

  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen">
      <div className="border w-96 relative h-fit">
        {" "}
        <div className="h-32 overflow-auto" onScroll={onScroll}>
          {" "}
          <ChatBody
            userName={userName}
            socket={socket}
            messages={messages}
            previousMessages={previousMessages}
          ></ChatBody>
        </div>
        <div className="absolute bottom-0 w-full bg-white">
          {" "}
          <ChatFooter socket={socket} userName={userName}></ChatFooter>
        </div>
      </div>
    </div>
  );
}
