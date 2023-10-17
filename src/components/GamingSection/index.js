import { Component } from "react";

import Loader from "react-loader-spinner";

import Cookies from "js-cookie";

import GameItem from "../GameItem";

import ThemeContext from "../../context/ThemeContext";

import {
  GameListContainer,
  TrendingSectionContainer,
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

class GamingSection extends Component {
  state = { gamesList: [], apiStatus: apiStatusConstants.initial };

  componentDidMount() {
    this.getGames();
  }
  getGames = async () => {
    this.setState({ apiStatus: apiStatusConstants.inProgress });

    const jwtToken = Cookies.get("jwt_token");

    const gamingVideosApiUrl = "https://apis.ccbp.in/videos/gaming";

    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    };
    const response = await fetch(gamingVideosApiUrl, options);

    if (response.ok) {
      const data = await response.json();
      const { videos } = data;
      console.log(videos);
      const updatedVideosData = videos.map((video) => ({
        id: video.id,
        title: video.title,
        thumbnailUrl: video.thumbnail_url,
        viewCount: video.view_count,
      }));
      this.setState({
        gamesList: updatedVideosData,
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
            <RetryBtn onClick={() => this.getGames()}>Retry</RetryBtn>
          </FailureImageContainer>
        );
      }}
    </ThemeContext.Consumer>
  );
  showSuccessView = () => {
    const { gamesList } = this.state;
    const isEmpty = gamesList.length === 0;
    return (
      <ThemeContext.Consumer>
        {(value) => {
          const { activeTheme } = value;
          const titleColor = activeTheme ? "black" : "white";
          const paraColor = activeTheme ? "#616e7c" : "#d7dfe9";
          return (
            <>
              {isEmpty ? (
                <FailureImageContainer>
                  <FailureImage
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png "
                    alt="no videos"
                  />
                  <Title color={titleColor}>No Search results found</Title>
                  <Para color={paraColor}>
                    Try different key words or remove search filter
                  </Para>
                  <RetryBtn onClick={() => this.getGames()}>Retry</RetryBtn>
                </FailureImageContainer>
              ) : (
                <GameListContainer>
                  {gamesList.map((game) => (
                    <GameItem key={game.id} gameDetails={game} />
                  ))}
                </GameListContainer>
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

  render() {
    return (
      <ThemeContext.Consumer>
        {(value) => {
          const { activeTheme } = value;
          const Theme = activeTheme ? "#f9f9f9" : " #0f0f0f";
          return (
            <TrendingSectionContainer data-testid="gaming" bgColor={Theme}>
              {this.showViews()}
            </TrendingSectionContainer>
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}

export default GamingSection;
