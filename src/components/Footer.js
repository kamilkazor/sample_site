import { IconContext } from "react-icons";
import { IoIosCall, IoIosMail } from "react-icons/io";

import githubQR from "../images/githubQR.svg";


const Footer = () => {
  return (
    <footer id="Footer">
      <div className="footerContent">
        <img className="githubQR" src={githubQR} alt="github QR Code"/>
        <div className="infoBox">
          <div>
            <h3>Site created by Kamil Kazor</h3>
            <p>To see more of my works checkout my github:</p>
            <p><a href="https://github.com/kamilkazor">https://github.com/kamilkazor</a></p>
          </div>
          <div className="contact">
            <h3>Contact:</h3>
            <div className="row">
              <IconContext.Provider value={{ color: "white", size:"2rem"}}>
                  <IoIosCall/>
              </IconContext.Provider>
              <p>+48 664 909 231</p>
            </div>
            <div className="row">
              <IconContext.Provider value={{ color: "white", size:"2rem"}}>
                <IoIosMail/>
              </IconContext.Provider>
              <p>kkrk1994@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}


export default Footer;