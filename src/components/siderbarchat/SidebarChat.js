import React from "react";
import {
  SidebarChatContainer,
  SidebarChatInfo,
  ChatInfoName,
  ChatMessage,
} from "./sidebarchat.styles";
import { Avatar } from "@material-ui/core";

const SidebarChat = () => {
  return (
    <SidebarChatContainer>
      <Avatar />
      <SidebarChatInfo>
        <ChatInfoName>Room Name</ChatInfoName>
        <ChatMessage>This is the last message</ChatMessage>
      </SidebarChatInfo>
    </SidebarChatContainer>
  );
};

export default SidebarChat;
