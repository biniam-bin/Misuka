import React from "react";
import Card from "../common/Card";
import {
  ProfileContainer,
  TopBar,
  MyPostsText,
  UpdateBtn,
  NameInputContainer,
  ProfileImagContainer,
  ProfileImgChange,
} from "./styles";

import Link from "next/link";
import { GrUpdate } from "react-icons/gr";
import { CardsContainer } from "../Favorites/styles";
import { AiOutlineArrowLeft } from "react-icons/ai";

function ProfilePage() {
  return (
    <ProfileContainer>
      <TopBar>
        <Link href="/">
          <AiOutlineArrowLeft size={29} />
        </Link>
      </TopBar>
      <ProfileImagContainer>
        <img src="https://picsum.photos/500/400" alt="" />
        <ProfileImgChange>
          <input type="file" accept="image/*" />
        </ProfileImgChange>
      </ProfileImagContainer>
      <NameInputContainer>
        <input type="text" value="Biniam Daniel" />
      </NameInputContainer>
      <UpdateBtn>Update</UpdateBtn>
      <MyPostsText>My Posts</MyPostsText>
      <CardsContainer>
        <Card favorite />
        <Card favorite />
        <Card favorite />
        <Card favorite />
        <Card favorite />
        <Card favorite />
        <Card favorite />
        <Card favorite />
      </CardsContainer>
    </ProfileContainer>
  );
}

export default ProfilePage;
