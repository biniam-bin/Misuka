import React from "react";
import {
  RegisterBtn,
  RegisterContainer,
  RegisterImage,
  SimpleText,
  RegisterWrapper,
  TextInput,
} from "./styles";
import Link from "next/link";
import { MdPersonPin } from "react-icons/md";
import { RiKeyFill } from "react-icons/ri";

function RegisterComponent() {
  return (
    <RegisterWrapper>
      <h3> Welcome to Musika!!</h3>
      <RegisterContainer>
        <RegisterImage>
          <img src="/music1.png" alt="" />
        </RegisterImage>
        <TextInput>
          <MdPersonPin size={22} />
          <input type="text" placeholder="Username" />
        </TextInput>
        <TextInput>
          <RiKeyFill size={22} />
          <input type="password" placeholder="Password" />
        </TextInput>
        <TextInput>
          <RiKeyFill size={22} />
          <input type="password" placeholder="Re-Password" />
        </TextInput>
        <RegisterBtn>Register</RegisterBtn>
        <SimpleText>
          Already have an account? <span><Link href="/login">Login</Link></span>
        </SimpleText>
      </RegisterContainer>
    </RegisterWrapper>
  );
}

export default RegisterComponent;
