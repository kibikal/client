import React from "react";
import logo from "../logo.jpg"

function Header() {
  return (
    <div>
      <header>
        <div className="logo-heading">
          <img src={logo} alt="" />
          <h1>Hostels Upload</h1>
        </div>
      </header>
    </div>
  );
}

export default Header;
