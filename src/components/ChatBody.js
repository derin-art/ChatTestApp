export default function ChatBody({ socket, messages }) {
  return (
    <div>
      {messages.map((item) => {
        return <div>{item.text}</div>;
      })}
    </div>
  );
}
