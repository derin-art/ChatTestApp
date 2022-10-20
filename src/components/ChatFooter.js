import { useState } from "react";

export default function ChatFooter({ socket }) {
  const [message, setMessage] = useState("");
  const handleClick = () => {
    socket.emit("message", {
      text: message,
      id: `${socket.id}${Math.random()}`,
      socketID: socket.id,
    });
  };
  return (
    <div>
      <input
        onChange={(e) => {
          setMessage(e.target.value);
        }}
      ></input>
      <button
        onClick={() => {
          handleClick();
        }}
      >
        Send
      </button>
    </div>
  );
}
