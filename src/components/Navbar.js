import { useState } from "react";

import logoIcon from "../images/logoIcon.svg"

const Navbar = () => {
  const [hideLinks, setHideLinks] = useState(true);

  const hamburgerHandler = () => {
    setHideLinks(!hideLinks);
  }

  return (
    <div className="Navbar">
      <div className="navContainer">
      <div className="logo"><img src={logoIcon} alt="logo"/><span>Sample Site</span></div>
      <div className="hamburger" onClick={hamburgerHandler}>☰</div>
      <ul className={hideLinks ? "hide" : ""}>
        <li>Home</li>
        <li>link1</li>
        <li>link2</li>
        <li>link3</li>
      </ul>
      </div>
    </div>
  )
}


export default Navbar;