import { useEffect, useRef, useState } from "react";

import logoIcon from "../images/logoIcon.svg"

const Navbar = () => {
  const [hideLinks, setHideLinks] = useState(true);
  const [sticky, setSticky] = useState(false);
  const navRef = useRef()
  const initialOffset = useRef(false);

  //Hides and shows ul with links on mobile devices
  const hamburgerHandler = () => {
    setHideLinks(!hideLinks);
  }

  //Adds and remover position fixed to Navbar
  const scrollHandler = () => {
    if(!initialOffset.current) initialOffset.current = navRef.current.offsetTop;
    window.pageYOffset >= initialOffset.current ? setSticky(true) : setSticky(false);
  }
  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    return () => {window.removeEventListener("scroll", scrollHandler)};
  }, [])


  return (
    <nav className={sticky ? "Navbar sticky" : "Navbar"} ref={navRef}>
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
    </nav>
  )
}


export default Navbar;