import React, { useState } from "react";
import ReactTooltip from "react-tooltip";
import InfiniteScroll from "react-infinite-scroll-component";

export default function ChatBody({
  socket,
  messages,
  previousMessages,
  userName,
  setPage,
  onScroll,
  formerPreviousMessages,
}) {
  console.log("sd", previousMessages);
  const messagesRef = React.useRef(null);
  const scrollToBottom = () => {
    messagesRef.current.scrollIntoView({
      behavior: "smooth",
    });
  };
  React.useEffect(() => {
    if (messagesRef.current) {
      scrollToBottom();
    }
  }, [messagesRef, messages]);

  const [pageNo, setPageNo] = useState(7);

  const divOnScroll = (e) => {
    console.log("sr", e.target.scrollTop);
    if (e.target.scrollTop === 0) {
      setPageNo((prev) => prev + 5);
    }
  };

  return (
    <div onScroll={divOnScroll} className="h-96 overflow-auto">
      <div className="flex flex-col">
        <div className="flex  flex-col-reverse">
          {previousMessages.slice(0, pageNo).map((item) => {
            const author = item.sender === userName;
            return (
              <div
                className={`w-full mb-2 flex  ${author ? "justify-end" : ""}`}
              >
                <div
                  key={item.id}
                  className={` text-white p-2 w-fit flex ${
                    author ? "flex-row-reverse" : ""
                  }`}
                >
                  <div
                    data-tip
                    data-for="registerTip"
                    className="text-green-500 flex items-center justify-center w-6 h-6 font-mono text-sm bg-gray-800  rounded-full"
                  >
                    {" "}
                    {item.sender[0].toUpperCase()}
                  </div>

                  <div
                    className={`flex flex-col max-w-8 ${
                      author ? "items-end" : ""
                    }`}
                  >
                    <div
                      className={`max-w-[150px] w-fit ${
                        author
                          ? "bg-green-800 mr-2 rounded-l rounded-b"
                          : "bg-green-400 ml-2  rounded-r rounded-b"
                      } p-2`}
                    >
                      {" "}
                      {item.text}
                    </div>
                    <div className="text-xs text-black w-fit">{item.date}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div ref={messagesRef}></div>
      </div>{" "}
    </div>
  );
}
