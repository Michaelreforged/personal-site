import React, { useEffect, useState } from "react";

export const ThemeContext = React.createContext();

const ThemeProvider = (props) => {
  const device = window.matchMedia("(prefers-color-scheme: dark)").matches;

  const themeCheck = () => {
    if (localStorage.getItem("theme")) {
      return localStorage.getItem("theme");
    } else if (device) {
      return "slate";
    } else {
      return "light";
    }
  };

  const [theme, setTheme] = useState(themeCheck());

  useEffect(() => {
    const bg = document.getElementById("theme");
    const color = getComputedStyle(bg, null).backgroundColor;
    document.body.style.backgroundColor = color;
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
