import { Component } from "react";

import Loader from "react-loader-spinner";

import Cookies from "js-cookie";

import ReactPlayer from "react-player";

import { AiOutlineLike } from "react-icons/ai";

import { BiDislike } from "react-icons/bi";

import { RiPlayListAddFill } from "react-icons/ri";

import {
  VideoItemContainer,
  ChannelLogo,
  VideoPlayerContainer,
  Title,
  ViewPara,
  ChannelName,
  SubscriberCount,
  Description,
  TransBtn,
  BtnContainer,
  BtnAndViewsContainer,
} from "./StyledComponents.js";

import { formatDistanceToNow } from "date-fns";

import ThemeContext from "../../context/ThemeContext";

const apiStatusConstants = {
  initial: "INITIAL",
  success: "SUCCESS",
  inProgress: "INPROGRESS",
  failure: "Failure",
};

class VideoItem extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    videoDetails: {},
    activeBtn: false,
    likeBtn: null,
    disLikeBtn: null,
  };

  componentDidMount() {
    this.getVideo();
  }

  getVideo = async (props) => {
    this.setState({ apiStatus: apiStatusConstants.inProgress });
    const jwtToken = Cookies.get("jwt_token");
    const { id } = this.props;
    console.log(id);
    const videoItemDetailsApiUrl = `https://apis.ccbp.in/videos/${id}`;
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    };
    const response = await fetch(videoItemDetailsApiUrl, options);
    if (response.ok) {
      const data = await response.json();
      const { video_details } = data;
      const filteredData = {
        id: video_details.id,
        channel: video_details.channel,
        title: video_details.title,
        videoUrl: video_details.video_url,
        thumbnailUrl: video_details.thumbnail_url,
        viewCount: video_details.view_count,
        publishedAt: video_details.published_at,
        description: video_details.description,
      };
      this.setState({
        videoDetails: filteredData,
        apiStatus: apiStatusConstants.success,
      });
    } else {
      this.setStatus({ apiStatus: apiStatusConstants.failure });
    }
  };
  showLoadingView = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </div>
  );
  showFailureView = () => (
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
        alt="failure view"
      />
    </div>
  );

  showSuccessView = () => {
    const { videoDetails } = this.state;
    const {
      id,
      videoUrl,
      title,
      viewCount,
      publishedAt,
      channel,
      description,
    } = videoDetails;
    const updatedPublishedDate = formatDistanceToNow(new Date(publishedAt));
    const updatedChannel = {
      name: channel.name,
      profileImageUrl: channel.profile_image_url,
      subscribtionCount: channel.subscriber_count,
    };
    const dimensions = {
      width: "100%",
      height: "640px",
    };

    return (
      <ThemeContext.Consumer>
        {(value) => {
          const {
            updatedSavedVideosList,
            savedVideosList,
            activeTheme,
          } = value;
          const { activeBtn, likeBtn, disLikeBtn } = this.state;
          console.log(likeBtn);
          console.log(disLikeBtn);
          const videoObj = savedVideosList.find((item) => item.id === id);

          const text = videoObj === undefined ? "save" : "saved";

          const onClickUpdatedList = () => {
            updatedSavedVideosList(videoDetails);
            this.setState((prevState) => ({ activeBtn: !prevState.activeBtn }));
          };
          const titleColor = activeTheme ? "black" : "white";
          const paraColor = activeTheme ? "#64748b" : "#d7dfe9";
          const colorChange = activeBtn ? "#2563eb" : paraColor;

          const onClickLike = () => {
            this.setState((prevState) => {
              if (prevState.disLikeBtn === true) {
                return { likeBtn: true, disLikeBtn: false };
              } else {
                return { likeBtn: true };
              }
            });
          };
          const onClickDisLike = () => {
            this.setState((prevState) => {
              if (prevState.likeBtn === true) {
                return { likeBtn: false, disLikeBtn: true };
              } else {
                return { disLikeBtn: true };
              }
            });
          };

          const likeBtnColor = likeBtn ? "#2563eb" : paraColor;
          const disLikeBtnColor = disLikeBtn ? "#2563eb" : paraColor;
          return (
            <>
              <VideoPlayerContainer>
                <ReactPlayer url={videoUrl} {...dimensions} />
              </VideoPlayerContainer>
              <div>
                <Title color={titleColor}>{title}</Title>
                <BtnAndViewsContainer>
                  <ViewPara>
                    {viewCount}.{updatedPublishedDate} ago
                  </ViewPara>
                  <BtnContainer>
                    <TransBtn
                      type="button"
                      color={likeBtnColor}
                      onClick={onClickLike}
                      value={likeBtn}
                    >
                      <AiOutlineLike size={"20px"} color={likeBtnColor} />
                      Like
                    </TransBtn>
                    <TransBtn
                      type="button"
                      color={disLikeBtnColor}
                      value={disLikeBtn}
                      onClick={onClickDisLike}
                    >
                      <BiDislike size={"20px"} color={disLikeBtnColor} />
                      Dislike
                    </TransBtn>
                    <TransBtn
                      type="button"
                      onClick={onClickUpdatedList}
                      color={colorChange}
                    >
                      <RiPlayListAddFill size={"20px"} color={colorChange} />
                      {text}
                    </TransBtn>
                  </BtnContainer>
                </BtnAndViewsContainer>
                <hr />
                <div>
                  <div>
                    <ChannelLogo
                      src={updatedChannel.profileImageUrl}
                      alt="channel logo"
                    />
                  </div>
                  <div>
                    <ChannelName color={titleColor}>
                      {updatedChannel.name}
                    </ChannelName>
                    <SubscriberCount>
                      {updatedChannel.subscribtionCount} subscribers
                    </SubscriberCount>
                    <br />
                    <Description color={titleColor}>{description}</Description>
                  </div>
                </div>
              </div>
            </>
          );
        }}
      </ThemeContext.Consumer>
    );
  };
  showViews = () => {
    const { apiStatus } = this.state;
    switch (apiStatus) {
      case apiStatusConstants.inProgress:
        return this.showLoadingView();
      case apiStatusConstants.success:
        return this.showSuccessView();
      case apiStatusConstants.failure:
        return this.showFailureView();
      default:
        return null;
    }
  };

  render() {
    return (
      <ThemeContext.Consumer>
        {(value) => {
          const { activeTheme } = value;
          const Theme = activeTheme ? "#f9f9f9" : " #0f0f0f";
          return (
            <VideoItemContainer data-testid="videoItemDetails" bgColor={Theme}>
              <>{this.showViews()}</>
            </VideoItemContainer>
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}

export default VideoItem;
