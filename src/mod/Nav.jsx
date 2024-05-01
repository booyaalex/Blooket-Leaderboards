import "./Nav.css";
import { useState } from "react";
import MediaQuery from "react-responsive";
import { FaBars } from "react-icons/fa";

function Nav() {
  function toggleMenu() {
    document.getElementById("navBar").classList.toggle("active");
  }

  return (
    <nav id="navBar">
      <MediaQuery maxWidth={644}>
        <FaBars
          className="toggle-nav-btn"
          size={25}
          color="white"
          onClick={toggleMenu}
        />
      </MediaQuery>
      <a href="/" className="navLink">
        Home
      </a>
      <a href="/gamemode" className="navLink">
        Gamemodes
      </a>
      <a href="/suggestions" className="navLink">
        Suggestions
      </a>
      <a href="/submissions" className="navLink">
        Submissions
      </a>
      <a href="/settings" className="navLink">
        Settings
      </a>
      <a href="https://discord.gg/5nYGQtqyBZ" className="navLink">
        Discord
      </a>
    </nav>
  );
}

export { Nav };
