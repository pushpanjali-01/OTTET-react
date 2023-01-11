import React, { useState } from "react";
import Search from "../Page/Search";
import Key from "./Key";
// import "./Css/Keyboard.css";
import "../Css/Keyboard.css"
const Layout = [
  "a", "b", "c", "d", "e", "f",
  "g", "h", "i", "j", "k", "l",
  "m", "n", "o", "p", "q", "r",
  "s", "t", "u", "v", "w", "x",
  "y", "z", "0", "1", "2", "3",
  "4", "5", "6", "7", "8", "9",
  "Clr", "|___|", "⌫",
];
const Keyboard = (props) => {

  const handleClick = (item) => {
    props.handleSearchClick(item)
  };

  return (
    <>
      <div
        style={{ height: "" }}
        className="main mt-5">
        <div className="keyboard mt-4">
          {Layout &&
            Layout.map((item, index) => {
              return (
                <>
                  <Key
                    item={item}
                    handleClick={handleClick}
                  />
                </>
              );
            })}
        </div>
      </div>
    </>
  );
};
export default Keyboard;
