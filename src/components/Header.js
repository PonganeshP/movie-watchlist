import React, { Component } from "react";
import Logo from "../hh.png";

class Header extends Component {
  state = {};
  render() {
    return (
      <div className="logo-container">
        <img src={Logo} alt="" />
      </div>
    );
  }
}

export default Header;
