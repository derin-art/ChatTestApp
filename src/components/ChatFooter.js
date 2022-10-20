import e from "cors";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function ChatFooter({ socket, userName }) {
  const [message, setMessage] = useState("");
  const date = new Date();
  const dateSent = date.toLocaleTimeString([], {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  });
  const handleClick = () => {
    socket.emit("message", {
      text: message,
      sender: userName,
      date: dateSent,
      id: `${socket.id}${Math.random()}`,
      socketID: socket.id,
    });
    const previousMessages = localStorage.getItem("chats");
    if (previousMessages) {
      const chats = JSON.parse(localStorage.getItem("chats"));
      console.log("sdsdsdM", chats);
      const finalArra = [...chats];

      finalArra.push({
        text: message,
        sender: userName,
        date: dateSent,
        _id: uuidv4(),
      });
      localStorage.setItem("chats", JSON.stringify(finalArra));
    } else {
      localStorage.setItem(
        "chats",
        JSON.stringify([
          {
            text: message,
            sender: userName,
            date: dateSent,
            _id: uuidv4(),
          },
        ])
      );
    }
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
