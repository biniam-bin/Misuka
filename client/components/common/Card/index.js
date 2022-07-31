import React, { useState } from "react";
import {
  CardBody,
  CardTitle,
  CardWrapper,
  ArtistName,
  CardButton,
  CardBodyHead,
  CardStatics,
  VoteStatics,
  favoriteStatics,
} from "./styles";
import { FaPlay, FaPauseCircle } from "react-icons/fa";
import { BsCaretDown, BsCaretUp } from "react-icons/bs";
import { BsHeart, BsTrashFill } from "react-icons/bs";

const Card = ({favorite, addToFavorite, removeFromFavorite}) => {
  const [isPlaying, setIsPlaying] = useState(false);

  function PlayMusic() {
    setIsPlaying(false);
  }

  function PauseMusic() {}

  return (
    <CardWrapper>
      <CardBody>
        <CardBodyHead>
          <CardTitle>SOST</CardTitle>
          <ArtistName>Rophnan</ArtistName>
        </CardBodyHead>
        <CardButton>
          <div onClick={() => setIsPlaying(!isPlaying)}>
            {!isPlaying ? (
              <FaPlay onClick={() => setIsPlaying(false)} size={23} />
            ) : (
              <FaPauseCircle size={36} />
            )}
          </div>
        </CardButton>
        <CardStatics>
          {!favorite && (
            <VoteStatics>
              <BsCaretUp />
              <span>18.6k</span>
              <BsCaretDown />
            </VoteStatics>
          )}
          <VoteStatics>
            {favorite ? (
              <BsTrashFill />
            ) : (
              <>
                <BsHeart />
                <span>1.2k</span>
              </>
            )}
          </VoteStatics>
        </CardStatics>
      </CardBody>
    </CardWrapper>
  );
};

export default Card;
