import React from "react";

const ThemeContext = React.createContext({
  activeTheme: true,
  changeTheme: () => {},
  savedVideosList: [],
  updatedSavedVideosList: () => {},
  showHomeBanner: true,
  onToggleHomeBanner: () => {},
});

export default ThemeContext;
