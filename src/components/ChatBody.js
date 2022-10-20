import React from "react";
import ReactTooltip from "react-tooltip";

export default function ChatBody({
  socket,
  messages,
  previousMessages,
  userName,
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

  return (
    <div className="h-96 overflow-auto">
      <div className="flex flex-col">
        {previousMessages.map((item) => {
          const author = item.sender === userName;
          return (
            <div className={`w-full mb-2 flex  ${author ? "justify-end" : ""}`}>
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
                  className={` ${
                    author
                      ? "bg-green-800 mr-2 rounded-l rounded-b"
                      : "bg-green-400 ml-2  rounded-r rounded-b"
                  } p-2`}
                >
                  {" "}
                  {item.text}
                </div>
              </div>
            </div>
          );
        })}
      </div>{" "}
      <div ref={messagesRef} className="flex flex-col">
        {messages.map((item) => {
          const author = item.sender === userName;
          return (
            <div className={`w-full mb-2 flex  ${author ? "justify-end" : ""}`}>
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
                  className={` ${
                    author
                      ? "bg-green-800 mr-2 rounded-l rounded-b"
                      : "bg-green-400 ml-2  rounded-r rounded-b"
                  } p-2`}
                >
                  {" "}
                  {item.text}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
