import React, { useState } from "react";
import {
  Container,
  LoginFrame,
  Image,
  TextFrame,
  LoginText,
} from "./login.styles";
import { auth, provider } from "../../firebase/firebase";
import { useStateValue } from "../context/StateProvider";
import { actionTypes } from "../reducer";
import { Button } from "@material-ui/core";

const Login = () => {
  const [{}, dispatch] = useStateValue();

  const signIn = async () => {
    try {
      const data = await auth.signInWithPopup(provider);
      dispatch({ type: actionTypes.SET_USERS, user: data.user });
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
