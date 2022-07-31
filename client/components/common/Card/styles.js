import styled, { keyframes } from "styled-components";
import { bounceInDown, bounceInRight } from "react-animations";

const bounceAnimation = keyframes`${bounceInDown}`;

export const CardWrapper = styled.div`
  height: 250px;
  min-width: 250px;
  border-radius: 5px;
  margin: 25px 5px;
  background: url("https://picsum.photos/500/600") gray;

  box-shadow: -10px 5px 25px lightblue;
  transition: all 0.3s ease-in;
  background-repeat: no-repeat;
  background-size: cover;
  @media (max-width: 600px) {
    min-width: 300px;
  }

  :hover {
    transform: scale(1.03);
  }
`;

export const CardBody = styled.div`
  background-color: rgba(255, 255, 255, 0.5);
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const CardBodyHead = styled.div`
  padding: 10px;
`;

export const CardTitle = styled.h3`
  margin: 0;
`;

export const ArtistName = styled.p`
  margin: 0;
  color: blue;
  cursor: pointer;
  :hover{
  }
`;

export const CardButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const CardStatics = styled.div`
  background-color: rgba(0, 0, 0, 0.6);
  height: 30px;
  display: flex;
  justify-content: space-between;
  padding: 0 8px;
  align-items: center;
  color: ${(props) => props.theme.colors.lightPrimary};
`;

export const VoteStatics = styled.div`
  display: flex;
  align-items: center;
  span {
    margin: 0 3px;
  }
  `;

export const favoriteStatics = styled.div`
display: flex;
align-items: center;
span {
  margin: 30px;
}



`