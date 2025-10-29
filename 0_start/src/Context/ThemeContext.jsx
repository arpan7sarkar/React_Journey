import { createContext } from "react";

export const themeData = createContext();
const ThemeContext = (props) => {
  return <themeData.Provider value='Providing value for access'>{props.children}</themeData.Provider>;
};

export default ThemeContext;
