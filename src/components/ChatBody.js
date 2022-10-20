export default function ChatBody({ socket, messages, previousMessages }) {
  console.log("sd", previousMessages);
  return (
    <div>
      {previousMessages.map((item) => {
        return <div key={item._id}>{item.text}</div>;
      })}
      {messages.map((item) => {
        return (
          <div key={item.id}>
            {item.text}
            {item.sender}
          </div>
        );
      })}
    </div>
  );
}
