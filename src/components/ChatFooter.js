import e from "cors";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

export default function ChatFooter({ socket, userName }) {
  let inputBox = null;
  let messageEnd = null;
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
    const id = uuidv4();
    socket.emit("message", {
      text: message,
      sender: userName,
      date: dateSent,
      id: `${socket.id}${Math.random()}`,
      socketID: socket.id,
      _id: id,
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
        _id: id,
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
            _id: id,
          },
        ])
      );
    }
  };

  return (
    <div className="w-full border flex p-2">
      <textarea
        onChange={(e) => {
          setMessage(e.target.value);
        }}
        className="w-full"
      ></textarea>
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
