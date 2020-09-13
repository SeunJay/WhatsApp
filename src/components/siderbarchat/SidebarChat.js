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


  useEffect(() => {
    const randomNumer = Math.floor(Math.random() * 5000);
    setSeed(randomNumer);
  }, []);

  const createChat = () => {
    const roomName = prompt("Please, enter a name for the chat room");
    if (roomName) {
      db.collection("rooms").add({
        name: roomName,
      });
      console.log(roomName);
    }
  };

  return !addNewChat ? (
    <Link to={`/rooms/${id}`}>
      <SidebarChatContainer>
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
        <SidebarChatInfo>
          <ChatInfoName>{name}</ChatInfoName>
          <ChatMessage>This is the last message</ChatMessage>
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
