import * as React from "react";
import Button from "react-bootstrap/Button";
import ThemeContext from "../../utils/ThemeContext";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const { useContext } = React;

function ThemeSwitcher() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <Button
      variant={theme === "dark" ? `outline-light` : `outline-dark`}
      onClick={() => setTheme(theme == "dark" ? "light" : "dark")}
      className={`mx-2`}
    >
      <FontAwesomeIcon
        icon={theme == "dark" ? faSun : faMoon}
        className="theme-icon"
      />
    </Button>
  );
}

export default ThemeSwitcher;
