import React from "react";
import { LoginBtn, LoginContainer, LoginImage, SimpleText, LoginWrapper, TextInput } from "./styles";
import { MdPersonPin } from "react-icons/md";
import {RiKeyFill} from "react-icons/ri"
import Link from "next/link";


function LoginComponent() {
  return (
    <LoginWrapper>
      <h3> Welcome to Musika!!</h3>
      <LoginContainer>
        <LoginImage>
          <img src="/music1.png" alt="" />
        </LoginImage>
        <TextInput>
          <MdPersonPin size={22} />
          <input type="text" placeholder="Username" />
        </TextInput>
        <TextInput>
          <RiKeyFill size={22} />
          <input type="password" placeholder="Password" />
        </TextInput>
        <LoginBtn>Login</LoginBtn>
        <SimpleText>New to musica? <span><Link href="/register">Register</Link></span></SimpleText>
      </LoginContainer>
    </LoginWrapper>
  );
}

export default LoginComponent;
