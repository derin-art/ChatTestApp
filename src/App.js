import logo from "./logo.svg";
import "./App.css";
import socketIO from "socket.io-client";
const socket = socketIO.connect("http://localhost:4000");

function App() {
  return <div className="App"></div>;
}

export default App;
