import { Component } from "react";

import Loader from "react-loader-spinner";

import Cookies from "js-cookie";

import HomeVideoItem from "../HomeVideoItem";

import { BsSearch } from "react-icons/bs";

import ThemeContext from "../../context/ThemeContext";

import {
  SearchInput,
  HomeVideosContainer,
  VideosUnorderedList,
  SearchContainer,
  SearchBtn,
  FailureImage,
  Title,
  Para,
  RetryBtn,
  FailureImageContainer,
} from "./StyledComponents.js";

const apiStatusConstants = {
  initial: "INITIAL",
  success: "SUCCESS",
  inProgress: "INPROGRESS",
  failure: "Failure",
};

class HomeVideoSection extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    videosList: [],
    userInput: "",
    onChangeUserInput: "",
  };

  componentDidMount() {
    this.getAllvideos();
  }
  getAllvideos = async () => {
    this.setState({ apiStatus: apiStatusConstants.inProgress });
    const jwtToken = Cookies.get("jwt_token");
    const { userInput } = this.state;
    const homeVideoApiUrl = `https://apis.ccbp.in/videos/all?search=${userInput}`;
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    };

    const response = await fetch(homeVideoApiUrl, options);
    if (response.ok) {
      const data = await response.json();
      const { videos } = data;
      const filteredData = videos.map((item) => ({
        id: item.id,
        channel: item.channel,
        title: item.title,
        thumbnailUrl: item.thumbnail_url,
        viewCount: item.view_count,
        publishedAt: item.published_at,
      }));
      this.setState({
        videosList: filteredData,
        apiStatus: apiStatusConstants.success,
      });
    } else {
      this.setState({ apiStatus: apiStatusConstants.failure });
    }
  };
  showLoadingView = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </div>
  );
  showFailureView = () => (
    <ThemeContext.Consumer>
      {(value) => {
        const { activeTheme } = value;
        const titleColor = activeTheme ? "black" : "white";
        const paraColor = activeTheme ? "#616e7c" : "#d7dfe9";
        const FailureImg = activeTheme
          ? "https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
          : "https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png";
        return (
          <FailureImageContainer>
            <FailureImage src={FailureImg} alt="failure view" />
            <Title color={titleColor}>Opps! Something Went Wrong</Title>
            <Para color={paraColor}>
              We are having some trouble to complete your request.Please try
              again
            </Para>
            <RetryBtn onClick={() => this.getAllvideos()}>Retry</RetryBtn>
          </FailureImageContainer>
        );
      }}
    </ThemeContext.Consumer>
  );
  showSuccessView = () => {
    const { videosList } = this.state;
    const is_empty = videosList.length === 0;
    return (
      <ThemeContext.Consumer>
        {(value) => {
          const { activeTheme } = value;
          const titleColor = activeTheme ? "black" : "white";
          const paraColor = activeTheme ? "#616e7c" : "#d7dfe9";
          return (
            <>
              {is_empty ? (
                <FailureImageContainer>
                  <FailureImage
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png "
                    alt="no videos"
                  />
                  <Title color={titleColor}>No Search results found</Title>
                  <Para color={paraColor}>
                    Try different key words or remove search filter
                  </Para>
                  <RetryBtn onClick={() => this.getAllvideos()}>Retry</RetryBtn>
                </FailureImageContainer>
              ) : (
                <VideosUnorderedList>
                  {videosList.map((video) => (
                    <HomeVideoItem videoDetails={video} key={video.id} />
                  ))}
                </VideosUnorderedList>
              )}
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
  userSearchEnter = () => {
    const { onChangeUserInput } = this.state;
    this.setState({ userInput: onChangeUserInput }, this.getAllvideos);
  };
  onChangeSearch = (event) => {
    this.setState({ onChangeUserInput: event.target.value });
  };

  render() {
    const { onChangeUserInput } = this.state;

    return (
      <ThemeContext.Consumer>
        {(value) => {
          const { activeTheme } = value;
          const Theme = activeTheme ? "#f9f9f9" : " #181818";
          const bgColor = activeTheme ? "white" : "black";
          const searchTextColor = activeTheme ? "black" : "white";
          return (
            <HomeVideosContainer data-testid="home" bgColor={Theme}>
              <SearchContainer>
                <SearchInput
                  type="search"
                  onChange={this.onChangeSearch}
                  value={onChangeUserInput}
                  placeholder="Search"
                  bgColor={bgColor}
                  color={searchTextColor}
                />
                <SearchBtn
                  data-testid="searchButton"
                  onClick={this.userSearchEnter}
                >
                  <BsSearch size={"10px"} />
                </SearchBtn>
              </SearchContainer>

              {this.showViews()}
            </HomeVideosContainer>
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}

export default HomeVideoSection;
