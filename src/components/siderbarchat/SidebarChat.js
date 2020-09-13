import React, { useState, useEffect } from "react";
import {
  SidebarChatContainer,
  SidebarChatInfo,
  ChatInfoName,
  ChatMessage,
} from "./sidebarchat.styles";
import { Avatar } from "@material-ui/core";

const SidebarChat = () => {
  const [seed, setSeed] = useState("");

  useEffect(() => {
    const randomNumer = Math.floor(Math.random() * 5000);
    setSeed(randomNumer);
  }, []);

  return (
    <SidebarChatContainer>
      <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
      <SidebarChatInfo>
        <ChatInfoName>Room Name</ChatInfoName>
        <ChatMessage>This is the last message</ChatMessage>
      </SidebarChatInfo>
    </SidebarChatContainer>
  );
};

export default SidebarChat;
