export default function ChatBody({ socket, messages, previousMessages }) {
  console.log("sd", previousMessages);
  return (
    <div>
      {messages.map((item) => {
        return (
          <div>
            {item.text}
            {item.sender}
          </div>
        );
      })}
    </div>
  );
}
