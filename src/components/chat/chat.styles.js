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

export const ChatBody = styled.div`
  flex: 1;
  background-image: url("https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png");
  background-repeat: repeat;
  background-position: center;
  padding: 30px;
  overflow: scroll;
`;

export const ChatMessage = styled.p`
  font-size: 16px;
  padding: 10px;
  width: fit-content;
  border-radius: 10px;
  position: relative;
  background-color: ${({ received }) => (received ? "#fff" : "#dcf8c6")};
  margin-bottom: 30px;
  margin-left: ${({ received }) => (received ? "0px" : "auto")};
`;

export const ChatName = styled.span`
  font-size: xx-small;
  position: absolute;
  top: -15px;
  font-weight: 500;
`;

export const ChatTimeStamp = styled.span`
  font-size: xx-small;
  color: gray;
  margin-left: 10px;
`;

export const ChatReceiver = styled(ChatMessage)`
  margin-left: auto;
  background-color: #dcf8c6;
`;

export const ChatFooterContainer = styled.div`
  display: flex;
  align-items: center;
  height: 62px;
  justify-content: space-between;
  border-top: 1px solid lightgray;

  > .MuiSvgIcon-root {
    color: gray;
    padding: 10px;
  }
`;

export const FormContainer = styled.form`
  flex: 1;
  display: flex;
`;

export const FormInput = styled.input`
  flex: 1;
  border-radius: 20px;
  border: none;
  outline-width: 0;
  padding: 10px;
`;

export const FormButton = styled.button`
  display: none;
`;
