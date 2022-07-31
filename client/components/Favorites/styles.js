import styled, { keyframes } from "styled-components";
import { bounceInDown, bounceInRight } from "react-animations";

const bounceAnimation = keyframes`${bounceInDown}`;

export const FavoriteContainer = styled.div`
  background-color: ${(props) => props.theme.colors.lightSecondary};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5px;
  height: 100%;
`;

export const FavoritesText = styled.h2``;


export const CardsContainer = styled.div`
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