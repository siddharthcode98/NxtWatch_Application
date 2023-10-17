import { Link } from "react-router-dom";

import ThemeContext from "../../context/ThemeContext";

import { formatDistanceToNow } from "date-fns";

import {
  VideoContainer,
  ThumbnailImg,
  ChannelLogo,
  Title,
  VideoDetails,
  ChannelName,
  ViewsPara,
  VideoDetailsContainer,
} from "./StyledComponents.js";

const HomeVideoItem = (props) => {
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
        const paraColor = activeTheme ? "#616e7c" : "#d7dfe9";
        return (
          <VideoContainer>
            <Link
              to={`/video/${id}`}
              style={{ textDecoration: "none", color: "black" }}
            >
              <ThumbnailImg src={thumbnailUrl} alt="video thumbnail" />
              <VideoDetails>
                <ChannelLogo
                  src={updatedChannel.profileImageUrl}
                  alt="channel logo"
                />
                <VideoDetailsContainer>
                  <Title color={titleColor}>{title}</Title>
                  <ChannelName color={paraColor}>
                    {updatedChannel.name}
                  </ChannelName>
                  <ViewsPara color={paraColor}>
                    <span>{viewCount} views</span>.
                    <span>{updatedPublishedDate} ago</span>
                  </ViewsPara>
                </VideoDetailsContainer>
              </VideoDetails>
            </Link>
          </VideoContainer>
        );
      }}
    </ThemeContext.Consumer>
  );
};

export default HomeVideoItem;
