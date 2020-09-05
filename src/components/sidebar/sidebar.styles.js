import styled from "styled-components";

export const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0.35;
`;

export const SidebarHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border: 1px solid lightgray;
`;

export const SidebarHeaderRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: 10vw;

  > .MuiSvgIcon-root {
    margin-right: 2vw;
    font-size: 24px !important;
  }
`;

export const SidebarSearchContainer = styled.div`
  background-color: #f6f6f6;
  display: flex;
  align-items: center;
  padding: 10px;
  height: 39px;
`;

export const SidebarSearch = styled.div`
  display: flex;
  align-content: center;
  background-color: #fff;
  width: 100%;
  height: 35px;
  border-radius: 20px;

  > .MuiSvgIcon-root {
    color: gray;
    padding: 7px 10px;
  }
`;

export const SidebarSearchInput = styled.input`
  border: none;
  margin-left: 10px;
  outline-width: 0;
  width: 80%;
`;

export const SidebarChatSection = styled.div`
  background-color: #fff;
  overflow: scroll;
  flex: 1
`;
