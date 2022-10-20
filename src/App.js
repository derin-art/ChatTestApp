import logo from "./logo.svg";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import socketIO from "socket.io-client";
import Home from "./components/Home";
import ChatPage from "./components/ChatPage";
const socket = socketIO.connect("http://localhost:4000");

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home socket={socket}></Home>}></Route>
        <Route
          path="/chat"
          element={<ChatPage socket={socket}></ChatPage>}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
