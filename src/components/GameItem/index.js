import {
  GameThumbnail,
  GameContainer,
  Title,
  Para,
} from "./StyledComponents.js";

import ThemeContext from "../../context/ThemeContext";

const GameItem = (props) => {
  const { gameDetails } = props;
  const { title, thumbnailUrl, viewCount } = gameDetails;

  return (
    <ThemeContext.Consumer>
      {(value) => {
        const { activeTheme } = value;
        const titleColor = activeTheme ? "black" : "white";
        const paraColor = activeTheme ? "#616e7c" : "#d7dfe9";
        return (
          <GameContainer>
            <GameThumbnail src={thumbnailUrl} alt="video thumbnail" />
            <Title color={titleColor}>{title}</Title>
            <Para color={paraColor}>{viewCount} Watching Worldwide</Para>
          </GameContainer>
        );
      }}
    </ThemeContext.Consumer>
  );
};

export default GameItem;
