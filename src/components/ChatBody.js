export default function ChatBody({ socket }) {
  useEffect(() => {
    socket.on("messageResponse", (data) => setMessages([...messages, data]));
  }, [socket, messages]);
  return <div></div>;
}
