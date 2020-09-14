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
import { useStateValue } from "../context/StateProvider";
import db from "../../firebase/firebase";
import { v4 as uuidv4 } from "uuid";
import firebase from "firebase";

const Chat = () => {
  const [input, setInput] = useState("");
  const [roomName, setRoomName] = useState("");
  const [messages, setMessages] = useState([]);
  const [{ user }] = useStateValue();
  const { roomId } = useParams();

  useEffect(() => {
    if (roomId) {
      db.collection("rooms")
        .doc(roomId)
        .onSnapshot((snapshot) => setRoomName(snapshot.data().name));

      db.collection("rooms")
        .doc(roomId)
        .collection("messages")
        .orderBy("timestamp", "asc")
        .onSnapshot((snapshot) =>
          setMessages(snapshot.docs.map((doc) => doc.data()))
        );
    }
  }, [roomId]);

  const sendMessage = async (e) => {
    e.preventDefault();

    db.collection("rooms").doc(roomId).collection("messages").add({
      name: user.displayName,
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
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
          <ChatInfoTimeStamp>
            last seen{" "}
            {new Date(
              messages[messages.length - 1]?.timestamp?.toDate()
            ).toUTCString()}
          </ChatInfoTimeStamp>
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
        {messages.map((message) => (
          <ChatMessage key={uuidv4()} received={message.name !== user.displayName}>
            <ChatName>{message.name}</ChatName>
            {message.message}
            <ChatTimeStamp>
              {new Date(message.timestamp?.toDate()).toUTCString()}
            </ChatTimeStamp>
          </ChatMessage>
        ))}
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
