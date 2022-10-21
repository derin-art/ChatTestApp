import ChatFooter from "./ChatFooter";
import ChatBody from "./ChatBody";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function ChatPage({ socket, userName, setUserName }) {
  const [messages, setMessages] = useState([]);
  const [page, setPage] = useState(5);

  useEffect(() => {
    socket.on("messageResponse", (data) => setMessages([...messages, data]));
  }, [socket, messages]);
  let previousMessages;

  if (localStorage.getItem("chats")) {
    previousMessages = JSON.parse(localStorage.getItem("chats"));
  }

  const [previousRenderedMessages, setPreviousRenderedMessages] = useState(
    previousMessages ? previousMessages.reverse().slice(0, page) : []
  );

  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen">
      <button className="absolute top-2 right-2 border p-2 rounded-full bg-green-400 text-white">
        <Link
          to="/"
          onClick={() => {
            setUserName("");
          }}
        >
          Logout
        </Link>
      </button>
      <div className="border w-96 relative h-[500px] rounded p-4">
        {" "}
        <div className="absolute top-0 left-1 text-xs">
          scroll to the top to reveal more messages
        </div>
        <div className="">
          {" "}
          <ChatBody
            setPage={setPage}
            userName={userName}
            socket={socket}
            messages={messages}
          ></ChatBody>
        </div>
        <div className="absolute bottom-4 w-full bg-white  left-0 border-t pt-4">
          {" "}
          <div className="w-full flex  items-center justify-center">
            <div className="w-[300px] ">
              <ChatFooter
                previousMessages={previousRenderedMessages}
                setPreviousRenderedMessages={setPreviousRenderedMessages}
                socket={socket}
                userName={userName}
              ></ChatFooter>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
