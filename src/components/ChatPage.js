import ChatFooter from "./ChatFooter";
import ChatBody from "./ChatBody";
import { useState, useEffect } from "react";

export default function ChatPage({ socket, userName }) {
  const [messages, setMessages] = useState([]);
  const [page, setPage] = useState(5);

  useEffect(() => {
    socket.on("messageResponse", (data) => setMessages([...messages, data]));
  }, [socket, messages]);
  let previousMessages;

  if (localStorage.getItem("chats")) {
    previousMessages = JSON.parse(localStorage.getItem("chats"));
  }

  const onScroll = (e) => {
    console.log("sr", e.target.scrollTop);
    if (e.target.scrollTop === 0) {
      setPage(page + 10);
      setPreviousRenderedMessages(previousMessages.slice(0, page));
    }
  };

  const [previousRenderedMessages, setPreviousRenderedMessages] = useState(
    previousMessages ? previousMessages.slice(0, page) : []
  );

  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen">
      <div className="border w-96 relative h-fit">
        {" "}
        <div className="h-96 overflow-auto" onScroll={onScroll}>
          {" "}
          <ChatBody
            userName={userName}
            socket={socket}
            messages={messages}
            previousMessages={previousRenderedMessages}
          ></ChatBody>
        </div>
        <div className="absolute -bottom-20 w-full bg-white">
          {" "}
          <ChatFooter socket={socket} userName={userName}></ChatFooter>
        </div>
      </div>
    </div>
  );
}
