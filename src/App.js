import { Component } from "react";

import { Route, Switch, Redirect } from "react-router-dom";

import LoginForm from "./components/LoginForm";

import Trending from "./components/Trending";

import Gaming from "./components/Gaming";

import Home from "./components/Home";

import SavedVideos from "./components/SavedVideos";

import VideoItemDetails from "./components/VideoItemDetails";

import ProtectedRoute from "./components/ProtectedRoute";

import NotFound from "./components/NotFound";

import ThemeContext from "./context/ThemeContext";

class App extends Component {
  state = {
    activeTheme: true,
    savedVideosList: [],
    showHomeBanner: true,
    saved: false,
  };

  changeTheme = () => {
    this.setState((prevState) => ({
      activeTheme: !prevState.activeTheme,
    }));
  };

  updatedSavedVideosList = (videoObj) => {
    console.log(videoObj);
    const { savedVideosList } = this.state;
    const objId = videoObj.id;
    const isExist = savedVideosList.find((item) => item.id === objId);
    if (isExist) {
      this.setState((prevState) => ({
        savedVideosList: prevState.savedVideosList.filter(
          (item) => item.id !== objId
        ),
        saved: !prevState.saved,
      }));
    } else {
      this.setState((prevState) => ({
        savedVideosList: [...prevState.savedVideosList, videoObj],
        saved: !prevState.saved,
      }));
    }
  };

  onToggleHomeBanner = () => {
    this.setState((prevState) => ({
      showHomeBanner: !prevState.showHomeBanner,
    }));
  };
  render() {
    const { activeTheme, savedVideosList, showHomeBanner, saved } = this.state;
    console.log(savedVideosList);
    console.log(showHomeBanner);
    return (
      <ThemeContext.Provider
        value={{
          activeTheme,
          savedVideosList,
          showHomeBanner,
          saved,
          changeTheme: this.changeTheme,
          updatedSavedVideosList: this.updatedSavedVideosList,
          onToggleHomeBanner: this.onToggleHomeBanner,
        }}
      >
        <Switch>
          <Route exact path="/login" component={LoginForm} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute
            exact
            path="/video/:id"
            component={VideoItemDetails}
          />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <ProtectedRoute component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </ThemeContext.Provider>
    );
  }
}

export default App;
