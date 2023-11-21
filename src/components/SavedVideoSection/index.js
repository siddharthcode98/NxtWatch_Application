import ThemeContext from "../../context/ThemeContext";
import TrendSavedVideoItem from "../TrendSavedVideoItem";

import { AiFillFire } from "react-icons/ai";
import {
  SavedVideoImage,
  SavedVideoContainer,
  TrendingBannerContainer,
  TrendingHeading,
  IconContainer,
  TrendingListContainer,
  Title,
  Para,
  ImageContainer,
} from "./StyledComponents";

const SavedVideoSection = () => {
  return (
    <ThemeContext.Consumer>
      {(value) => {
        const { savedVideosList } = value;
        const isEmpty = savedVideosList.length === 0;
        const { activeTheme } = value;
        const Theme = activeTheme ? "  #ebebeb" : " #181818";
        const paraColor = activeTheme ? "#616e7c" : "#d7dfe9";
        const titleColor = activeTheme ? "black" : "white";
        const iconContainerColor = activeTheme ? "#d7dfe9" : "black";
        const bgTheme = activeTheme ? "#f9f9f9" : " #0f0f0f";
        return (
          <SavedVideoContainer bgColor={bgTheme}>
            {isEmpty ? (
              <ImageContainer>
                <SavedVideoImage
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png "
                  alt="no saved Videos"
                />
                <Title color={titleColor}>No saved Videos found</Title>
                <Para color={paraColor}>
                  You can save your videos while Watching videos
                </Para>
              </ImageContainer>
            ) : (
              <>
                <TrendingBannerContainer bgColor={Theme}>
                  <IconContainer color={iconContainerColor}>
                    <AiFillFire color={"red"} size={"35px"} />
                  </IconContainer>
                  <TrendingHeading color={titleColor}>
                    Saved Videos
                  </TrendingHeading>
                </TrendingBannerContainer>
                <TrendingListContainer>
                  {savedVideosList.map((video) => (
                    <TrendSavedVideoItem key={video.id} videoDetails={video} />
                  ))}
                </TrendingListContainer>
              </>
            )}
          </SavedVideoContainer>
        );
      }}
    </ThemeContext.Consumer>
  );
};

export default SavedVideoSection;
