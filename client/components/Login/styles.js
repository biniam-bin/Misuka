import styled, { keyframes } from "styled-components";
import { bounceInDown, bounceInRight } from "react-animations";

const bounceAnimation = keyframes`${bounceInDown}`;

export const LoginWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  flex-direction: column;
  h3 {
    color: gray;
    margin-bottom: 8px;
  }
`;

export const LoginContainer = styled.div`
  background-color: #f2f0f0;
  width: 350px;
  height: 75vh;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 5px;
  box-shadow: -10px 5px 15px gray;
`;
export const LoginImage = styled.div`
  img {
    height: 200px;
  }
`;

export const TextInput = styled.div`
  background-color: ${(props) => props.theme.colors.lightPrimary};
  width: 270px;
  padding: 4px 15px;
  height: 40px;
  border-radius: 50px;
  display: flex;
  align-items: center;
  margin: 8px 0;
  input {
    width: 100%;
    height: 100%;
    background-color: transparent;
    border: none;
    margin-left: 3px;
    :focus {
      outline: none;
    }
  }
`;

export const LoginBtn = styled.div`
  background: rgb(2, 0, 36);
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(50, 29, 134, 1) 0%,
    rgba(116, 81, 194, 1) 42%,
    rgba(224, 44, 211, 1) 75%,
    rgba(226, 0, 255, 1) 100%
  );
  width: 270px;
  border-radius: 5px;
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 45px;
  cursor: pointer;
  border-radius: 50px;
`;
export const SimpleText = styled.div`
    margin-top: 20px;
    span{
        color: blue;
        cursor: pointer;
    }

`