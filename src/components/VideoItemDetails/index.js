import VideoItem from "../VideoItem";

import SidebarHeader from "../SidebarHeader";

import Header from "../Header";

import { HomeSection, HomeSection2, AppContainer } from "./StyledComponents.js";

const VideoItemDetails = (props) => {
  const { match } = props;
  const { params } = match;
  const { id } = params;
  return (
    <AppContainer>
      <Header />
      <HomeSection>
        <SidebarHeader />
        <HomeSection2>
          <VideoItem id={id} />
        </HomeSection2>
      </HomeSection>
    </AppContainer>
  );
};

export default VideoItemDetails;
