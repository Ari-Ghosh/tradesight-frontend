import "./DarkMode.css";
import { ChangeEventHandler, useEffect, useState } from "react";
import { useTheme } from "./ThemeInitializer";
const DarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    const prefersDark =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;

    const defaultDark = storedTheme === "dark" || (storedTheme === null && prefersDark);

    setIsDarkMode(defaultDark);

    if (defaultDark) {
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.setAttribute("data-theme", "light");
    }
  }, []);

  const toggleTheme: ChangeEventHandler<HTMLInputElement> = (e) => {
    const isChecked = e.target.checked;

    setIsDarkMode(isChecked);

    if (isChecked) {
      localStorage.setItem("theme", "dark");
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
      document.documentElement.setAttribute("data-theme", "light");
    }
  };
 /* const {theme, toggleTheme} = useTheme();

  const toggleMode = () => {
    toggleTheme();
  };
  */
  return (
    <div className="toggle-theme-wrapper">
      <span>☀️</span>
      <label className="toggle-theme" htmlFor="checkbox">
        <input
          type="checkbox"
          id="checkbox"
          onChange={toggleTheme}
          checked={isDarkMode}
        />
        <div className="slider round"></div>
      </label>
      <span>🌒</span>
    </div>
    /*<div className="toggle-theme-wrapper">
      <span>☀️</span>
      <label className="toggle-theme" htmlFor="checkbox">
        <input
          type="checkbox"
          id="checkbox"
          onChange={toggleMode}
          checked={theme === "dark"}
        />
        <div className="slider round"></div>
      </label>
      <span>🌒</span>
      </div>*/
  );
};

export default DarkMode;
