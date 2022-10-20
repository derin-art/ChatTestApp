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
    <div>
      {previousMessages.map((item) => {
        return <div key={item._id}>{item.text}</div>;
      })}
      <div ref={messagesRef}>
        {messages.map((item) => {
          return (
            <div key={item.id}>
              {item.text}
              {item.sender}
            </div>
          );
        })}
      </div>
    </div>
  );
}
