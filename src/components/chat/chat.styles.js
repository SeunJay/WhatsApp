import styled from "styled-components";

export const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0.65;
`;

export const ChatHeader = styled.div`
  display: flex;
  /* justify-content: space-between; */
  align-content: center;
  padding: 20px;
  border: 1px solid lightgray;
`;

export const ChatInfoContainer = styled.div`
  flex: 1;
  padding-left: 40px;
`;

export const ChatInfoName = styled.h3`
  margin-bottom: 3px;
  font-weight: 500;
`;
export const ChatInfoTimeStamp = styled.p`
  color: gray;
`;

export const ChatIconContainer = styled.div`
  display: flex;
  align-content: center;
`;
