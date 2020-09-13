import React, { useState } from "react";
import {
  Container,
  LoginFrame,
  Image,
  TextFrame,
  LoginText,
} from "./login.styles";
import { auth, provider } from "../../firebase/firebase";
import { Button } from "@material-ui/core";

const Login = () => {
  const signIn = async () => {
    try {
      const data = await auth.signInWithPopup(provider);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <LoginFrame>
        <Image src="https://upload.wikimedia.org/wikipedia.jpg" alt="" />

        <TextFrame>
          <LoginText>Sign in to WhatsApp</LoginText>
        </TextFrame>

        <Button type="submit" onClick={signIn}>
          Sign In With Google
        </Button>
      </LoginFrame>
    </Container>
  );
};

export default Login;
