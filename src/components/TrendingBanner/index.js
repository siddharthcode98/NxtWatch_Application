import { AiFillFire } from "react-icons/ai";

import ThemeContext from "../../context/ThemeContext";

import {
  TrendingBannerContainer,
  TrendingHeading,
  IconContainer,
} from "../StyledComponents/index.js";

const TrendingBanner = () => {
  return (
    <ThemeContext.Consumer>
      {(value) => {
        const { activeTheme } = value;
        const Theme = activeTheme ? "#f9f9f9" : "#0f0f0f";
        return (
          <TrendingBannerContainer bgColor={Theme}>
            <IconContainer>
              <AiFillFire />
            </IconContainer>
            <TrendingHeading>Trending</TrendingHeading>
          </TrendingBannerContainer>
        );
      }}
    </ThemeContext.Consumer>
  );
};

export default TrendingBanner;
