import Row from "./Row";

import githubQR from "../images/githubQR.png";
import phoneIcon from "../images/phoneIcon.svg";
import envelopeIcon from "../images/envelopeIcon.svg";

const Footer = () => {
  return (
    <footer className="Footer">
      <div className="footerContent">
        <img className="githubQR" src={githubQR} alt="github QR Code"/>
        <div className="infoBox">
          <div>
            <h3>Site created by Kamil Kazor</h3>
            <p>To se more of my works checkout my github:</p>
            <p><a href="https://github.com/kamilkazor">https://github.com/kamilkazor</a></p>
          </div>
          <div className="contact">
            <h3>Contact:</h3>
            <Row>
              <img className="contactIcon" src={phoneIcon} alt="tel"/>
              <p>+48 664 909 231</p>
            </Row>
            <Row>
              <img className="contactIcon" src={envelopeIcon} alt="email"/>
              <p>kkrk1994@gmail.com</p>
            </Row>
          </div>
        </div>
      </div>
    </footer>
  )
}


export default Footer;