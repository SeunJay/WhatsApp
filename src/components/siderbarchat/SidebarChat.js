import React, { useState, useEffect } from "react";
import {
  SidebarChatContainer,
  SidebarChatInfo,
  ChatInfoName,
  ChatMessage,
} from "./sidebarchat.styles";
import { Avatar } from "@material-ui/core";


const SidebarChat = ({ addNewChat }) => {
  const [seed, setSeed] = useState("");

  useEffect(() => {
    const randomNumer = Math.floor(Math.random() * 5000);
    setSeed(randomNumer);
  }, []);

  const createChat = () => {
    const roomName = prompt("Please, enter a name for the chat room");
    if (roomName) {
      alert(`The newly created chat name is ${roomName}`);
      console.log(roomName);
    }
  };

  return !addNewChat ? (
    <SidebarChatContainer>
      <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
      <SidebarChatInfo>
        <ChatInfoName>Room Name</ChatInfoName>
        <ChatMessage>This is the last message</ChatMessage>
      </SidebarChatInfo>
    </SidebarChatContainer>
  ) : (
    <SidebarChatContainer onClick={createChat}>
      <h2>Add New Chat</h2>
    </SidebarChatContainer>
  );
};

export default SidebarChat;
