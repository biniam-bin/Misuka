import styled, { keyframes } from "styled-components";
import { bounceInDown, bounceInRight } from "react-animations";

const bounceAnimation = keyframes`${bounceInDown}`;

export const BodyContainer = styled.div`
  /* background: red; */
  min-height: 100vh;
  padding-top: 70px;
`;

export const MusicContainer = styled.div`
  background-color: ${(props) => props.theme.colors.lightSecondary};
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  padding: 5px;
  height: 100%;
`;

export const SearchContainer = styled.div`
  background-color: ${(props) => props.theme.colors.lightPrimary};
  width: 50vw;
  height: 42px;
  margin-top: -25px;
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
`;

export const CardsContainer = styled.div`
  /* background-color: red;    */
  width: 100%;
  height: 100%;
  padding: 15px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin-top: 35px;
  /* gap: 25px; */
  padding: 0 20px;
  /* grid-template-columns: repeat(4, 20vw);
  @media (max-width: 1000px) {
      grid-template-columns: repeat(3, 20vw);


   } */
`;