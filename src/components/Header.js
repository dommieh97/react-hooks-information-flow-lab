import React from "react";

function Header(props) {

 

  return (
    <div className={"App " + (props.isDarkMode ? "dark" : "light")}>
      <header>
        <h2>Shopster</h2>
        <button onClick={props.onDarkModeClick}>
          {props.isDarkMode ? "Dark" : "Light"} Mode
        </button>
      </header>
    </div>
  );
}

export default Header;
