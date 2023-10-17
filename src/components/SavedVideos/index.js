import Header from "../Header";

import SidebarHeader from "../SidebarHeader";

import SavedVideoSection from "../SavedVideoSection";

import { HomeSection, AppContainer, HomeSection2 } from "./StyledComponents.js";

const SavedVideos = () => {
  return (
    <AppContainer>
      <Header />
      <HomeSection>
        <SidebarHeader />
        <HomeSection2>
          <SavedVideoSection />
        </HomeSection2>
      </HomeSection>
    </AppContainer>
  );
};

export default SavedVideos;
