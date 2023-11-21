import ThemeContext from "../../context/ThemeContext";

import {
  BannerContainer,
  HomeBannerLogo,
  Paragraph,
  GetItNowBtn,
  TransBtn,
} from "./StyledComponents.js";

import { AiOutlineClose } from "react-icons/ai";

const HomeBanner = () => {
  return (
    <ThemeContext.Consumer>
      {(value) => {
        const { onToggleHomeBanner } = value;
        return (
          <BannerContainer>
            <TransBtn onClick={() => onToggleHomeBanner()}>
              <AiOutlineClose size={"30px"} />
            </TransBtn>
            <HomeBannerLogo
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
              alt="nxt watch logo"
            />
            <Paragraph>Buy Nxt Watch Premium prepaid plans with UPI</Paragraph>
            <GetItNowBtn>GET IT NOW</GetItNowBtn>
          </BannerContainer>
        );
      }}
    </ThemeContext.Consumer>
  );
};

export default HomeBanner;
