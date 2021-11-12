import * as React from "react";

import ThemeContext from "../../../utils/ThemeContext";

const { useContext } = React;
function Divider() {
  const { theme } = useContext(ThemeContext);

  return <hr className={`border-${theme === "light" ? "dark" : "light"}`} />;
}

export default Divider;
