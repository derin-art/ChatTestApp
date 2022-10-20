import e from "cors";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

export default function ChatFooter({ socket, userName }) {
  const sendIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      className="fill-white"
    >
      <path fill="none" d="M0 0h24v24H0z" />
      <path d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z" />
    </svg>
  );
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
    setMessage("");
  };

  return (
    <div className="w-full  flex">
      <textarea
        onChange={(e) => {
          setMessage(e.target.value);
        }}
        value={message}
        placeholder="Please Input a Message..."
        className="w-full p-2 border rounded-lg"
      ></textarea>
      <button
        onClick={() => {
          handleClick();
        }}
        className="ml-2 p-2 rounded-full border bg-green-400"
      >
        {sendIcon}
      </button>
    </div>
  );
}
