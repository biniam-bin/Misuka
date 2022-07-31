import React, { useState } from "react";
import {
  IconContainer,
  LogoContainer,
  NavContainer,
  NavLink,
  NavLinks,
  PopUpContainer,
  PopUpItem,
  Profile,
  ProfileImgContainer,
  ProfileTextContainer,
  SideNav,
} from "./styles";
import Link from "next/link";
import { useRouter } from "next/router";
import { BsChevronDown } from "react-icons/bs";
import { RiMenu3Fill } from "react-icons/ri";

const Navs = [
  { text: "Home", path: "/" },
  { text: "My Favorites", path: "/favorites" },
  // { text: "Others", path: "/others" },
  { text: "About", path: "/about" },
];

const PopUp = ({ active }) => {
  return (
    <PopUpContainer active={active}>
      <SideNav>
        {Navs.map((nav) => {
          return (
            <PopUpItem key={nav.text}>
              {" "}
              <Link href={nav.path}>{nav.text}</Link>
            </PopUpItem>
          );
        })}
      </SideNav>
      <PopUpItem><Link href="/profile">Profile</Link></PopUpItem>
      <PopUpItem><Link href="/login">Logout</Link></PopUpItem>
    </PopUpContainer>
  );
};

function Nav() {
  const [showProfile, setShowProfile] = useState(false);
  const router = useRouter();

  return (
    <NavContainer>
      <div className="" style={{ display: "flex" }}>
        <LogoContainer>
          <img src="/music1.png" style={{ height: "68px" }} alt="" />
        </LogoContainer>
        <NavLinks>
          {Navs.map((nav) => {
            return (
              <NavLink active={router.pathname == nav.path} key={nav.text}>
                <Link href={nav.path}>{nav.text}</Link>
              </NavLink>
            );
          })}
        </NavLinks>
      </div>
      <Profile
        id="profile"
        onClick={() => {
          setShowProfile(!showProfile);
        }}
      >
        <ProfileImgContainer>
          <img src="https://picsum.photos/300/300" alt="" />
        </ProfileImgContainer>
        <IconContainer>
          <RiMenu3Fill size={25} />
        </IconContainer>
      </Profile>
      <PopUp active={showProfile} />
    </NavContainer>
  );
}

export default Nav;
