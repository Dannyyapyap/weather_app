import { useState } from "react";
import ThemeBtn from "../buttons/themeBtn";

export default function ThemeSwitcher() {
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
    const htmlElement = document.documentElement;
    if (isDarkTheme) {
      htmlElement.classList.add("darkTheme");
      htmlElement.classList.remove("lightTheme");
    } else {
      htmlElement.classList.add("lightTheme");
      htmlElement.classList.remove("darkTheme");
    }
  };

  return <ThemeBtn onClick={toggleTheme} />;
}
