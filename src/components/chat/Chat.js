import React, { useState, useEffect } from "react";
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
import { useParams } from "react-router-dom";
import axios from "../../axios";
import db from "../../firebase/firebase";

const Chat = ({ messages }) => {
  const [input, setInput] = useState("");
  const [roomName, setRoomName] = useState("");
  const { roomId } = useParams();



  useEffect(() => {
    if (roomId) {
      db.collection("rooms")
        .doc(roomId)
        .onSnapshot((snapshot) => setRoomName(snapshot.data().name));
    }
  }, [roomId]);

  console.log(roomId);

  const sendMessage = async (e) => {
    e.preventDefault();

    await axios.post("/api/v1/messages/new", {
      message: input,
      name: "ME",
      timestamp: "JUST NOW!",
      received: false,
    });

    setInput("");
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <ChatContainer>
      <ChatHeader>
        <Avatar />

        <ChatInfoContainer>
          <ChatInfoName>{roomName}</ChatInfoName>
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
        <ChatMessage received={false}>
          <ChatName>Seun</ChatName>
          This is a test message
          <ChatTimeStamp>{new Date().toUTCString()}</ChatTimeStamp>
        </ChatMessage>

        {/* <ChatReceiver>
          <ChatName>Me</ChatName>
          This is a Message
          <ChatTimeStamp>{new Date().toUTCString()}</ChatTimeStamp>
        </ChatReceiver> */}
      </ChatBody>

      <ChatFooterContainer>
        <InsertEmoticonIcon />

        <FormContainer>
          <FormInput
            onChange={handleChange}
            value={input}
            type="text"
            placeholder="Type a message"
          />
          <FormButton onClick={sendMessage}>Send a message</FormButton>
        </FormContainer>
        <MicNoneIcon />
      </ChatFooterContainer>
    </ChatContainer>
  );
};

export default Chat;
