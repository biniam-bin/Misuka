import styled, { keyframes } from "styled-components";
import { bounceInDown, bounceInRight } from "react-animations";

const bounceAnimation = keyframes`${bounceInDown}`;


export const ProfileContainer = styled.div`
  background-color: ${(props) => props.theme.colors.lightSecondary};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5px;
  height: 100%;
`;

export const TopBar = styled.div`
  display: flex;
  width: 100%;
  padding: 5px 15px;
  justify-content: start;
`

export const ProfileImagContainer = styled.div`
img{

    height: 180px;
    width: 180px;
    border-radius: 50%;
    position: relative;
}

`

export const ProfileImgChange = styled.div`
  position: absolute;
  /* top: 150px; */



  input {
    /* opacity: 0; */
  }
`;

export const NameInputContainer = styled.div`
    background-color: ${(props) => props.theme.colors.lightPrimary};
  width: 22vw;
  height: 42px;
  margin-top: 45px;
  padding: 2px 20px;
  box-shadow: -10px 5px 20px gray;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 600px) {
       width: 80vw;

   }
  input {
    width: 100%;
    border: none;
    margin-left: 8px;
    :focus {
      outline: none;
    }
  }
`

export const UpdateBtn = styled.div`
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

export const MyPostsText = styled.h2`

    margin-top: 50px;
`