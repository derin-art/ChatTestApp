import ChatFooter from "./ChatFooter";
import ChatBody from "./ChatBody";

export default function ChatPage({ socket }) {
  return (
    <div>
      <ChatBody socket={socket}></ChatBody>
      <ChatFooter socket={socket}></ChatFooter>
    </div>
  );
}
