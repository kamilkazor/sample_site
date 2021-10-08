import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

import logoIcon from "../images/logoIcon.svg";

const Navbar = ({headerRef}) => {
  const hideLinks = useRef(true);
  const [linksStyle, setLinksStyle] = useState(""); //Empty string as initial state prevents running animation on first render
  const [burgerOpen, setBurgerOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const navRef = useRef()

  //Hides and shows ul with links on mobile devices
  const burgerHandler = () => {
    setBurgerOpen(!burgerOpen);
    hideLinks.current = !hideLinks.current;
    hideLinks.current ? setLinksStyle("hide") : setLinksStyle("show");
  }

  //Adds and remover position fixed to Navbar
  useEffect(() => {
    const scrollHandler = () => {
      const initialNavOffset = headerRef.current.offsetTop + headerRef.current.clientHeight - navRef.current.clientHeight;
      window.pageYOffset >= initialNavOffset ? setSticky(true) : setSticky(false);
    }
    window.addEventListener("scroll", scrollHandler);
    return () => {window.removeEventListener("scroll", scrollHandler)};
  }, [])


  return (
    <nav id="Navbar" className={sticky ? "sticky" : ""} ref={navRef}>
      <div id="navContainer">
        <div id="logo">
          <img src={logoIcon} alt="logo"/><span>Sample Site</span>
        </div>
        <div onClick={burgerHandler} className={burgerOpen ? "menu open" : "menu"}>
          <div className="burger"></div>
        </div>
      <div id="linksContainer" className={linksStyle}>
        <ul className={linksStyle}>
          <Link to="/">
            <li onClick={burgerHandler}>Home</li>
          </Link>
          <Link to="/hall-of-dogs">
            <li onClick={burgerHandler}>Hall of Dogs</li>
          </Link>
          <Link to="/empty-1">
            <li onClick={burgerHandler}>Empty 1</li>
          </Link>
          <Link to="/empty-2">
            <li onClick={burgerHandler}>Empty 2</li>
          </Link>
        </ul>
      </div>
      </div>
    </nav>
  )
}


export default Navbar;