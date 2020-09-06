import React from "react";
import {
  ChatContainer,
  ChatHeader,
  ChatInfoContainer,
  ChatIconContainer,
  ChatInfoName,
  ChatInfoTimeStamp,
  ChatBody,
  ChatMessage,
  ChatName,
  ChatTimeStamp,
  ChatReceiver,
  ChatFooterContainer,
  FormContainer,
  FormInput,
  FormButton,
} from "./chat.styles";
import { Avatar, IconButton } from "@material-ui/core";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { SearchOutlined } from "@material-ui/icons";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import MicNoneIcon from "@material-ui/icons/MicNone";

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

      <ChatBody>
        <ChatMessage>
          <ChatName>Seun</ChatName>
          This is a Message
          <ChatTimeStamp>{new Date().toUTCString()}</ChatTimeStamp>
        </ChatMessage>

        <ChatReceiver>
          <ChatName>Me</ChatName>
          This is a Message
          <ChatTimeStamp>{new Date().toUTCString()}</ChatTimeStamp>
        </ChatReceiver>
      </ChatBody>

      <ChatFooterContainer>
        <InsertEmoticonIcon />

        <FormContainer>
          <FormInput type="text" placeholder="Type a message" />
          <FormButton>Send a message</FormButton>
        </FormContainer>
        <MicNoneIcon />
      </ChatFooterContainer>
    </ChatContainer>
  );
};

export default Chat;
