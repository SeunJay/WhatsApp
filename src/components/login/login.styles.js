import styled from "styled-components";

export const Container = styled.div`
  background-color: #f8f8f8;
  display: grid;
  place-items: center;
  height: 100vh;
  width: 100vw;
`;

export const LoginFrame = styled.div`
  padding: 100px;
  text-align: center;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0, 1px;

  > button {
    margin-top: 50px;
    text-transform: inherit !important;
    background-color: #0a8d48 !important;
    color: #fff;
  }
`;

export const Image = styled.img`
  object-fit: contain;
  margin-bottom: 40px;
  height: 100px;
`;

export const TextFrame = styled.div``;

export const LoginText = styled.h1``;

export const LoginButton = styled.button``;
