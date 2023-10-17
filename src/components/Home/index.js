import Header from "../Header";

import SidebarHeader from "../SidebarHeader";

import HomeBanner from "../HomeBanner";

import HomeVideoSection from "../HomeVideoSection";

import { HomeSection, HomeSection2, AppContainer } from "./StyledComponents.js";

import ThemeContext from "../../context/ThemeContext";

const Home = () => {
  return (
    <ThemeContext.Consumer>
      {(value) => {
        const { showHomeBanner } = value;
        console.log(showHomeBanner);
        return (
          <AppContainer>
            <Header />
            <HomeSection>
              <SidebarHeader />
              <HomeSection2>
                {showHomeBanner && <HomeBanner />}
                <HomeVideoSection />
              </HomeSection2>
            </HomeSection>
          </AppContainer>
        );
      }}
    </ThemeContext.Consumer>
  );
};

export default Home;
