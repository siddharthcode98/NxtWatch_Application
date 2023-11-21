// import { MdOutlineLightMode } from "react-icons/md";

import { withRouter, Link } from "react-router-dom";

import Popup from "reactjs-popup";

import Cookies from "js-cookie";

import ThemeContext from "../../context/ThemeContext";

import { IoSunny } from "react-icons/io5";

import { FaMoon } from "react-icons/fa";

import { FiLogOut } from "react-icons/fi";

import { AiFillHome, AiFillFire } from "react-icons/ai";

import { SiYoutubegaming } from "react-icons/si";

import { RiPlayListAddFill } from "react-icons/ri";

import { AiOutlineClose } from "react-icons/ai";

import { GiHamburgerMenu } from "react-icons/gi";

import {
  Navbar,
  LoginLogo,
  ProfileImage,
  LogoutBtn,
  HeaderSection,
  PopupContainer,
  PopupButton,
  TransBtn,
  MobileLogout,
  LinksContainer,
  LinkItem,
  LinkText,
  SmallScreenPopup,
  SmallScreenClose,
} from "./StyledComponents.js";

const Header = (props) => {
  const onClickLogout = () => {
    const { history } = props;
    Cookies.remove("jwt_token");
    history.replace("/");
  };
  const { history } = props;
  console.log(history.location.pathname);
  const pathName = history.location.pathname;
  const overlayStyles = {
    backgroundColor: " rgba(0, 0, 0, 0.5)",
  };
  const smallScreenModal = {
    backgroundColor: "white",
  };

  return (
    <ThemeContext.Consumer>
      {(value) => {
        const { activeTheme, changeTheme } = value;
        const Theme = activeTheme ? "#ffffff" : " #181818";
        const logo = activeTheme
          ? "https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
          : "https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png";

        const themeLogo = activeTheme ? (
          <FaMoon size={"35px"} />
        ) : (
          <IoSunny size={"35px"} color={"white"} />
        );
        const color = activeTheme ? " #ebebeb " : " #424242";
        const textColor = activeTheme ? "black" : "white";
        return (
          <Navbar bgColor={Theme}>
            <Link to="/">
              <LoginLogo src={logo} alt="website logo" />
            </Link>

            <HeaderSection>
              <TransBtn type="button" onClick={() => changeTheme()}>
                {themeLogo}
              </TransBtn>

              <ProfileImage
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                alt="profile"
              />
              <SmallScreenPopup>
                <Popup
                  modal
                  trigger={
                    <MobileLogout>
                      <GiHamburgerMenu size={"25px"} color={textColor} />
                    </MobileLogout>
                  }
                  overlayStyle={smallScreenModal}
                >
                  {(close) => (
                    <LinksContainer>
                      <SmallScreenClose onClick={() => close()}>
                        <AiOutlineClose />
                      </SmallScreenClose>
                      <Link style={{ textDecoration: "none" }} to="/">
                        <LinkItem bgColor={pathName === "/"} color={color}>
                          <AiFillHome
                            color={pathName === "/" ? "#ff0b37" : "#cccccc"}
                          />
                          <LinkText color={textColor}>Home</LinkText>
                        </LinkItem>
                      </Link>
                      <Link to="/trending" style={{ textDecoration: "none" }}>
                        <LinkItem
                          bgColor={pathName === "/trending"}
                          color={color}
                        >
                          <AiFillFire
                            color={
                              pathName === "/trending" ? "#ff0b37" : "#cccccc"
                            }
                          />
                          <LinkText color={textColor}>Trending</LinkText>
                        </LinkItem>
                      </Link>
                      <Link to="/gaming" style={{ textDecoration: "none" }}>
                        <LinkItem
                          bgColor={pathName === "/gaming"}
                          color={color}
                        >
                          <SiYoutubegaming
                            color={
                              pathName === "/gaming" ? "#ff0b37" : "#cccccc"
                            }
                          />
                          <LinkText color={textColor}>Gaming</LinkText>
                        </LinkItem>
                      </Link>
                      <Link
                        to="/saved-videos"
                        style={{ textDecoration: "none" }}
                      >
                        <LinkItem
                          bgColor={pathName === "/saved-videos"}
                          color={color}
                        >
                          <RiPlayListAddFill
                            color={
                              pathName === "/saved-videos"
                                ? "#ff0b37"
                                : "#cccccc"
                            }
                          />
                          <LinkText color={textColor}>SavedVideos</LinkText>
                        </LinkItem>
                      </Link>
                    </LinksContainer>
                  )}
                </Popup>
              </SmallScreenPopup>

              <div>
                <Popup
                  trigger={
                    <div>
                      <LogoutBtn>Logout</LogoutBtn>
                      <MobileLogout>
                        <FiLogOut size={"25px"} color={textColor} />
                      </MobileLogout>
                    </div>
                  }
                  overlayStyle={overlayStyles}
                  modal
                >
                  {(close) => (
                    <PopupContainer>
                      <h1>Are you Sure you want to Logout?</h1>
                      <PopupButton
                        bgColor="#ffffff"
                        Color="#7e858e"
                        onClick={() => close()}
                      >
                        Cancel
                      </PopupButton>
                      <PopupButton
                        bgColor="#3b82f6"
                        Color="#ffffff"
                        onClick={onClickLogout}
                      >
                        Confirm
                      </PopupButton>
                    </PopupContainer>
                  )}
                </Popup>
              </div>
            </HeaderSection>
          </Navbar>
        );
      }}
    </ThemeContext.Consumer>
  );
};

export default withRouter(Header);
