import React, { useState, useEffect } from "react";
import {
  SidebarChatContainer,
  SidebarChatInfo,
  ChatInfoName,
  ChatMessage,
} from "./sidebarchat.styles";
import { Link } from "react-router-dom";
import { Avatar } from "@material-ui/core";
import db from "../../firebase/firebase";

const SidebarChat = ({ id, name, addNewChat }) => {
  const [seed, setSeed] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const randomNumer = Math.floor(Math.random() * 5000);
    setSeed(randomNumer);
  }, []);

  useEffect(() => {
    if (id) {
      db.collection("rooms")
        .doc(id)
        .collection("messages")
        .orderBy("timestamp", "asc")
        .onSnapshot((snapshot) =>
          setMessages(snapshot.docs.map((doc) => doc.data()))
        );
    }
  }, [id]);

  const createChat = () => {
    const roomName = prompt("Please, enter a name for the chat room");
    if (!roomName) {
      alert("No name for chat room entered!");
    }

    db.collection("rooms").add({
      name: roomName,
    });
  };

  return !addNewChat ? (
    <Link to={`/rooms/${id}`} style={{ textDecoration: "none", color: "#000" }}>
      <SidebarChatContainer>
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
        <SidebarChatInfo>
          <ChatInfoName>{name}</ChatInfoName>
          <ChatMessage>{messages[messages.length - 1]?.message}</ChatMessage>
        </SidebarChatInfo>
      </SidebarChatContainer>
    </Link>
  ) : (
    <SidebarChatContainer onClick={createChat}>
      <h2>Add New Chat</h2>
    </SidebarChatContainer>
  );
};

export default SidebarChat;
