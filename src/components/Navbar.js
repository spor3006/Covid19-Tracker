import React from "react";

const Navbar = () => {
  return (
    <nav>
      <div>
        <h1>This is Navbar</h1>
        <ul>
          <li a href="www.google.co.in">
            Home
          </li>
          <li href="/About">About</li>
          <li href="/Contacts">Contacts</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
