import React from "react";
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

const Sidebar = () => {
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
        <SidebarChat />
        <SidebarChat />
      </SidebarChatSection>
    </SidebarContainer>
  );
};

export default Sidebar;
