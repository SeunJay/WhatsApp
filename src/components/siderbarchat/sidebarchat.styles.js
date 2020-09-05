import styled from "styled-components";

export const SidebarChatContainer = styled.div`
  display: flex;
  align-content: center;
  padding: 20px;
  cursor: pointer;
  border-bottom: 1px solid #f6f6f6;

  &:hover {
    background-color: #f6f6f6;
  }
`;

export const SidebarChatInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 15px;
`;

export const ChatInfoName = styled.h2`
  font-size: 16px;
  margin-bottom: 8px;
`;

export const ChatMessage = styled.p``;
