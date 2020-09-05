import React from "react";
import header_icon from "../../assets/images/Page 1/Header/bsicon.svg";
import "./style.css";

function Header({ ...props }) {
  return (
    <div className="header">
      <img className="header-img" src={header_icon} />
    </div>
  );
}

export default Header;
