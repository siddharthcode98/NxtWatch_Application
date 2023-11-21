import { Link } from "react-router-dom";

import { formatDistanceToNow } from "date-fns";

import {
  TrendingVideoContainer,
  Title,
  TrendingThumbnail,
  ViewsPara,
  ChannelName,
  TextContainer,
} from "./StyledComponents.js";

import ThemeContext from "../../context/ThemeContext";

const TrendSavedVideoItem = (props) => {
  const { videoDetails } = props;
  const {
    id,
    channel,
    title,
    thumbnailUrl,
    viewCount,
    publishedAt,
  } = videoDetails;
  const updatedPublishedDate = formatDistanceToNow(new Date(publishedAt));
  const updatedChannel = {
    name: channel.name,
    profileImageUrl: channel.profile_image_url,
  };
  return (
    <ThemeContext.Consumer>
      {(value) => {
        const { activeTheme } = value;
        const titleColor = activeTheme ? "black" : "white";
        const paraColor = activeTheme ? "#606060" : "#d7dfe9";
        return (
          <Link to={`/video/${id}`}>
            <TrendingVideoContainer>
              <TrendingThumbnail src={thumbnailUrl} alt="video thumbnail" />
              <TextContainer>
                <Title color={titleColor}>{title}</Title>
                <ChannelName color={paraColor}>
                  {updatedChannel.name}
                </ChannelName>
                <ViewsPara color={paraColor}>
                  <span>{viewCount}</span>. <span>{updatedPublishedDate}</span>
                </ViewsPara>
              </TextContainer>
            </TrendingVideoContainer>
          </Link>
        );
      }}
    </ThemeContext.Consumer>
  );
};

export default TrendSavedVideoItem;
