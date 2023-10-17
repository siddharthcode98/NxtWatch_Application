import Header from "../Header";

import SidebarHeader from "../SidebarHeader";

import GamingSection from "../GamingSection";

import { SiYoutubegaming } from "react-icons/si";

import ThemeContext from "../../context/ThemeContext";

import {
  HomeSection,
  TrendingBannerContainer,
  TrendingHeading,
  IconContainer,
  GameSection2,
  AppContainer,
} from "./StyledComponents.js";

const Gaming = () => {
  return (
    <ThemeContext.Consumer>
      {(value) => {
        const { activeTheme } = value;
        const Theme = activeTheme ? "  #ebebeb" : " #181818";
        const iconContainerColor = activeTheme ? "#d7dfe9" : "black";
        const titleColor = activeTheme ? "black" : "white";
        return (
          <AppContainer data-testid="gaming">
            <Header />
            <HomeSection>
              <SidebarHeader />
              <GameSection2>
                <TrendingBannerContainer data-testid="banner" bgColor={Theme}>
                  <IconContainer color={iconContainerColor}>
                    <SiYoutubegaming color={"red"} size={"35px"} />
                  </IconContainer>
                  <TrendingHeading color={titleColor}>Gaming</TrendingHeading>
                </TrendingBannerContainer>
                <GamingSection />
              </GameSection2>
            </HomeSection>
          </AppContainer>
        );
      }}
    </ThemeContext.Consumer>
  );
};

export default Gaming;
