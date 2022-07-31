import styled, { keyframes } from "styled-components";
import { bounceInDown, bounceInRight } from "react-animations";

const bounceAnimation = keyframes`${bounceInDown}`;
const bounceRightAnimation = keyframes`${bounceInRight}`;

export const NavContainer = styled.div`
  background-color: ${props => props.theme.colors.lightSecondary};
  height: 70px;
  width: auto;
  display: flex;
  justify-content: space-between;
  box-shadow: 10px 5px 5px lightgray;
  position: sticky;
  top: 0;
  /* z-index: -10 !important; */
`;

export const LogoContainer = styled.div`
  margin: 0 30px;
  img {
    height: 68px;
    cursor: pointer;
  }
`;

export const NavLinks = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 30vw;

  @media (max-width: 1000px) {
    width: 40vw;
  }
  @media (max-width: 600px) {
    display: none;
  }
`;

export const NavLink = styled.li`
  cursor: pointer;
  display: flex;
  justify-content: center;

  ::after{
    position : absolute;
    content: "";
    height: 3px;
    width: 20px;
    border-radius: 8px;
    background: ${props => props.active && "black"};
    bottom: 20px;
    align-self: center;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;

  }
`;

export const Profile = styled.div`
  /* background-color: green; */
  width: 20vw;
  display: flex;
  align-items: center;
  justify-content: space-around;
  cursor: pointer;
`;

export const ProfileImgContainer = styled.div`
  img {
    height: 3rem;
    width: 3rem;
    border-radius: 50%;
    
  }
  @media (max-width: 600px) {
    display: none;
  }
`;

export const IconContainer = styled.div`
  display: none;
  @media (max-width: 600px) {
    display: block;
  }
`;

export const ProfileTextContainer = styled.div``;

// ///////////////////////////////////////////////////////// POPUP BOX //////////////////////////////

export const PopUpContainer = styled.div`
  background-color: ${(props) => props.theme.colors.lightPrimary};
  animation: 1s ${bounceAnimation};
  display: ${(props) => (props.active ? "block" : "none")};
  z-index: -200;
  position: absolute;
  right: 0;
  top: 75px;
  width: 250px;
  border-radius: 5px;
  padding: 15px 0;
  box-shadow: -10px 5px 20px gray;

`;

export const PopUpItem = styled.div`
  :hover {
    background-color: ${(props) => props.theme.colors.lightSecondary};
  }
  align-items: center;

  display: flex;
  padding: 0 15px;
  cursor: pointer;
  height: 50px;
  z-index: 100;
`;

export const SideNav = styled.div`
  display: none;
  @media (max-width: 600px) {
    display: block;
  }
`;
