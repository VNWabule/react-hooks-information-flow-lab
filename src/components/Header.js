import React from "react";

function Header({isDarkMode, onDarkModeClick}) {
  return (
    <header>
      <h1>Shopster</h1>
      <button onClick={onDarkModeClick}>{isDarkMode ? "Light" : "Dark"} Mode</button>
    </header>
  );
}
export default Header;