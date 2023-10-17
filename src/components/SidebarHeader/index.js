import { Link, withRouter } from "react-router-dom";

import ThemeContext from "../../context/ThemeContext";

import { AiFillHome, AiFillFire } from "react-icons/ai";

import { SiYoutubegaming } from "react-icons/si";

import { RiPlayListAddFill } from "react-icons/ri";

import {
  SidebarContainer,
  SocialLogos,
  Paragraph,
  Heading,
  LinksContainer,
  LinkItem,
  LinkText,
} from "./StyledComponents.js";

const SidebarHeader = (props) => {
  const { history } = props;
  console.log(history.location.pathname);
  const pathName = history.location.pathname;
  return (
    <ThemeContext.Consumer>
      {(value) => {
        const { activeTheme } = value;
        const Theme = activeTheme ? "#ffffff" : " #0f0f0f";
        const color = activeTheme ? "  #e2e8f0 " : " #424242";
        const textColor = activeTheme ? "black" : "white";
        return (
          <SidebarContainer bgColor={Theme}>
            <LinksContainer>
              <Link style={{ textDecoration: "none" }} to="/">
                <LinkItem bgColor={pathName === "/"} color={color}>
                  <AiFillHome
                    color={pathName === "/" ? "#ff0b37" : "#cccccc"}
                  />
                  <LinkText color={textColor}>Home</LinkText>
                </LinkItem>
              </Link>
              <Link to="/trending" style={{ textDecoration: "none" }}>
                <LinkItem bgColor={pathName === "/trending"} color={color}>
                  <AiFillFire
                    color={pathName === "/trending" ? "#ff0b37" : "#cccccc"}
                  />
                  <LinkText color={textColor}>Trending</LinkText>
                </LinkItem>
              </Link>
              <Link to="/gaming" style={{ textDecoration: "none" }}>
                <LinkItem bgColor={pathName === "/gaming"} color={color}>
                  <SiYoutubegaming
                    color={pathName === "/gaming" ? "#ff0b37" : "#cccccc"}
                  />
                  <LinkText color={textColor}>Gaming</LinkText>
                </LinkItem>
              </Link>
              <Link to="/saved-videos" style={{ textDecoration: "none" }}>
                <LinkItem bgColor={pathName === "/saved-videos"} color={color}>
                  <RiPlayListAddFill
                    color={pathName === "/saved-videos" ? "#ff0b37" : "#cccccc"}
                  />
                  <LinkText color={textColor}>SavedVideos</LinkText>
                </LinkItem>
              </Link>
            </LinksContainer>
            <div>
              <Heading color={textColor}>Contact us</Heading>
              <div>
                <SocialLogos
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                  alt="facebook logo"
                />
                <SocialLogos
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                  alt="twitter logo"
                />
                <SocialLogos
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                  alt="linked in logo"
                />
              </div>
              <Paragraph color={textColor}>
                Enjoy!now to see your channels and recommendations!
              </Paragraph>
            </div>
          </SidebarContainer>
        );
      }}
    </ThemeContext.Consumer>
  );
};

export default withRouter(SidebarHeader);
