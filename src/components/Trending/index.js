import Header from "../Header";

import SidebarHeader from "../SidebarHeader";

import TrendingSection from "../TrendingSection";

import { AiFillFire } from "react-icons/ai";

import ThemeContext from "../../context/ThemeContext";

import {
  HomeSection,
  TrendingBannerContainer,
  TrendingHeading,
  IconContainer,
  TrendingSection2,
  AppContainer,
} from "./StyledComponents.js";

const Trending = () => {
  return (
    <ThemeContext.Consumer>
      {(value) => {
        const { activeTheme } = value;
        const Theme = activeTheme ? "  #ebebeb" : " #181818";
        const paraColor = activeTheme ? "#616e7c" : "#d7dfe9";
        const titleColor = activeTheme ? "black" : "white";
        const iconContainerColor = activeTheme ? "#d7dfe9" : "black";
        return (
          <AppContainer>
            <Header />
            <HomeSection>
              <SidebarHeader />
              <TrendingSection2>
                <TrendingBannerContainer data-testid="trending" bgColor={Theme}>
                  <IconContainer color={iconContainerColor}>
                    <AiFillFire color={"red"} size={"35px"} />
                  </IconContainer>
                  <TrendingHeading color={titleColor}>Trending</TrendingHeading>
                </TrendingBannerContainer>
                <TrendingSection />
              </TrendingSection2>
            </HomeSection>
          </AppContainer>
        );
      }}
    </ThemeContext.Consumer>
  );
};

export default Trending;
