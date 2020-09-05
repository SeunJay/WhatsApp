import React from "react";
import {
  ChatContainer,
  ChatHeader,
  ChatInfoContainer,
  ChatIconContainer,
  ChatInfoName,
  ChatInfoTimeStamp,
} from "./chat.styles";
import { Avatar, IconButton } from "@material-ui/core";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { SearchOutlined } from "@material-ui/icons";

const Chat = () => {
  return (
    <ChatContainer>
      <ChatHeader>
        <Avatar />

        <ChatInfoContainer>
          <ChatInfoName>Room Name</ChatInfoName>
          <ChatInfoTimeStamp>Last seen ...</ChatInfoTimeStamp>
        </ChatInfoContainer>

        <ChatIconContainer>
          <IconButton>
            <SearchOutlined />
          </IconButton>

          <IconButton>
            <AttachFileIcon />
          </IconButton>

          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </ChatIconContainer>
      </ChatHeader>
    </ChatContainer>
  );
};

export default Chat;
