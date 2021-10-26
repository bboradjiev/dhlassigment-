import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="nav">
      <Link to="/">Gallery</Link>
      <Link to="/favorites">Favorites</Link>
    </header>
  );
}

export default Header;
