import React from "react";

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
            <div className={`w-full  mb-2 flex ${author ? "justify-end" : ""}`}>
              <div
                key={item.id}
                className={` text-white p-2 w-fit ${
                  author ? " bg-green-300" : "bg-green-400 justify-end"
                }`}
              >
                {item.sender[0]}
                {item.text}
              </div>
            </div>
          );
        })}
      </div>{" "}
      <div ref={messagesRef} className="flex flex-col">
        {messages.map((item) => {
          const author = item.sender === userName;
          return (
            <div className={`w-full mb-2 flex ${author ? "justify-end" : ""}`}>
              <div
                key={item.id}
                className={` text-white p-2 w-fit ${
                  author ? "bg-green-300 " : "bg-green-400 "
                }`}
              >
                {item.sender[0]}
                {item.text}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
