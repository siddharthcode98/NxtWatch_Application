import Header from "../Header";

import SidebarHeader from "../SidebarHeader";

import {
  HomeSection,
  HomeSection2,
  Title,
  Para,
  ImageContainer,
  NotFoundContainer,
  NotFoundImage,
} from "./StyledComponents.js";

import ThemeContext from "../../context/ThemeContext";

const NotFound = () => {
  return (
    <ThemeContext.Consumer>
      {(value) => {
        const { activeTheme } = value;
        const Theme = activeTheme ? "  #ebebeb" : " #181818";
        const paraColor = activeTheme ? "#616e7c" : "#d7dfe9";
        const titleColor = activeTheme ? "black" : "white";
        const bgTheme = activeTheme ? "#f9f9f9" : " #181818";
        return (
          <NotFoundContainer bgColor={bgTheme}>
            <Header />
            <HomeSection>
              <SidebarHeader />
              <HomeSection2>
                <ImageContainer>
                  <NotFoundImage
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png"
                    alt="not found"
                  />
                  <Title color={titleColor}>Page Not Found</Title>
                  <Para color={paraColor}>
                    We are sorry, the page you have requested could not be Found
                  </Para>
                </ImageContainer>
              </HomeSection2>
            </HomeSection>
          </NotFoundContainer>
        );
      }}
    </ThemeContext.Consumer>
  );
};

export default NotFound;
