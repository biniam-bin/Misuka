import React from "react";
import Card from "../common/Card";
import {
  BodyContainer,
  CardsContainer,
  MusicContainer,
  SearchContainer,
} from "./styles";
import { IoIosSearch } from "react-icons/io";
import { RiMenu3Fill } from "react-icons/ri";

function HomeMain() {
  return (
    <BodyContainer>
      <MusicContainer>
        <SearchContainer>
          <IoIosSearch size={20} />

          <input type="text" placeholder="Search Here..." />
        </SearchContainer>
        <CardsContainer>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </CardsContainer>
      </MusicContainer>
    </BodyContainer>
  );
}

export default HomeMain;
