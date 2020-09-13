import React, { useState, useEffect } from "react";
import {
  SidebarContainer,
  SidebarHeader,
  SidebarHeaderRight,
  SidebarSearchContainer,
  SidebarSearch,
  SidebarSearchInput,
  SidebarChatSection,
} from "./sidebar.styles";
import SidebarChat from "../siderbarchat/SidebarChat";
import ChatIcon from "@material-ui/icons/Chat";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { SearchOutlined } from "@material-ui/icons";
import { Avatar, IconButton } from "@material-ui/core";
import db from "../../firebase/firebase";

const Sidebar = () => {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    const unsubscribe = db.collection("rooms").onSnapshot((snapshot) => {
      const documents = snapshot.docs.map((doc) => ({
        id: doc.id,
        data: doc.data(),
      }));
      setRooms(documents);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <SidebarContainer>
      <SidebarHeader>
        <Avatar />
        <SidebarHeaderRight>
          <IconButton>
            <DonutLargeIcon />
          </IconButton>

          <IconButton>
            <ChatIcon />
          </IconButton>

          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </SidebarHeaderRight>
      </SidebarHeader>

      <SidebarSearchContainer>
        <SidebarSearch>
          <SearchOutlined />
          <SidebarSearchInput
            type="text"
            placeholder="Search or Start new chat"
          />
        </SidebarSearch>
      </SidebarSearchContainer>

      <SidebarChatSection>
        <SidebarChat addNewChat />
        {rooms.map((room) => (
          <SidebarChat key={room.id} id={room.id} name={room.data.name} />
        ))}
      </SidebarChatSection>
    </SidebarContainer>
  );
};

export default Sidebar;
