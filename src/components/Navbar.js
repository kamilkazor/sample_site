import { useState } from "react";

const Navbar = () => {
  const [hideLinks, setHideLinks] = useState(true);

  const hamburgerHandler = () => {
    setHideLinks(!hideLinks);
  }

  return (
    <div className="Navbar">
      <div className="logo">Logo</div>
      <div className="hamburger" onClick={hamburgerHandler}>☰</div>
      <ul className={hideLinks ? "hide" : ""}>
        <li>Home</li>
        <li>link1</li>
        <li>link2</li>
        <li>link3</li>
      </ul>
    </div>
  )
}


export default Navbar;