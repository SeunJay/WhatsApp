import React, { useEffect, useState } from "react";
import Sidebar from "./components/sidebar/Sidebar";
import Chat from "./components/chat/Chat";
import Pusher from "pusher-js";
import axios from "./axios";
import "./App.css";

function App() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    axios
      .get("/api/v1/messages/sync")
      .then((response) => setMessages(response.data.messages));
  }, []);

  useEffect(() => {
    const pusher = new Pusher("90a2c52979f8e6ab402d", {
      cluster: "eu",
    });

    const channel = pusher.subscribe("messages");
    channel.bind("inserted", (newMessage) => {
      setMessages([...messages, newMessage]);
    });

    return () => {
      channel.unbind_all();
      channel.unsubscribe("messages");
    };
  }, [messages]);

  console.log(messages);

  return (
    <div className="app">
      <div className="app-body">
        <Sidebar />
        <Chat messages={messages} />
      </div>
    </div>
  );
}

export default App;
