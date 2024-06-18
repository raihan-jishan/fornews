import React, { useEffect, useState } from "react";
import { CiDark, CiSun } from "../../utils/icons";
const ThemeSwitcher = ({ click }) => {
  const [theme, setTheme] = useState(null);

  // dark & light mode
  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <div>
      {click ? null : (
        <button onClick={handleThemeSwitch}>
          {theme === "dark" ? (
            <h1>
              <CiSun size={35} className="text-white dark:text-white" />
            </h1>
          ) : (
            <h1>
              {" "}
              <CiDark size={35} />{" "}
            </h1>
          )}
        </button>
      )}
    </div>
  );
};

export default ThemeSwitcher;
