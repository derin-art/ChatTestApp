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
      <div className="border w-96 relative h-[500px] rounded p-4">
        {" "}
        <div className="" onScroll={onScroll}>
          {" "}
          <ChatBody
            userName={userName}
            socket={socket}
            messages={messages}
            previousMessages={previousRenderedMessages}
          ></ChatBody>
        </div>
        <div className="absolute bottom-4 w-full bg-white  left-0 border-t pt-4">
          {" "}
          <div className="w-full flex  items-center justify-center">
            <div className="w-[300px] ">
              <ChatFooter socket={socket} userName={userName}></ChatFooter>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
