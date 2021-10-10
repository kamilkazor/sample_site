import logoIcon from "../images/logoIcon.svg";
import sampleSiteQR from "../images/sampleSiteQR.svg";
import htmlIcon from "../images/html.svg";
import cssIcon from "../images/css.svg";
import jsIcon from "../images/js.svg";
import reactIcon from "../images/react.svg";

const Home = () => {
  return (
    <div className="mainContainer">
      <main className="main">
        <article id="aboutArticle" className="row veryLightGreenBG">
          <img id="aboutLogoImg" src={logoIcon} alt="logo"/>
          <div className="textBox">
            <h2>About:</h2>
            <p>Sample Site is my web-dev training project.</p>
            <p>Please feel free to explore the site and see what it has to offer.</p>
          </div>
        </article>
        <article id="responsiveArticle" className="row veryLightGreenBG">
          <div className="textBox">
            <h2>Responsive design:</h2>
            <p>Flexible layout, sticky navigation bar and animated mobile menu...</p>
            <p>The site was written in a way to provide a nice experience on all devices. Please resize the window or scan the QR Code with your phone to see all the features.</p>
          </div>
          <img id="responsiveQR" src={sampleSiteQR} alt="sample site QR code"/>
        </article>
        <article id="madeWithArticle">
            <span id="BG" className="veryLightGreenBG"></span>
          <div className="textBox">
            <h2>MADE WITH:</h2>
            <div className="row">
              <div className="row">
                <div className="iconCard">
                  <img className="iconImg" src={htmlIcon} alt="html5 icon"/>
                  <span>HTML 5</span>
                </div>
                <div className="iconCard">
                  <img className="iconImg" src={cssIcon} alt="css3 icon"/>
                  <span>CSS 3</span>
                </div>
              </div>
              <div className="row">
                <div className="iconCard">
                  <img className="iconImg" src={jsIcon} alt="javascript icon"/>
                  <span>JAVASCRIPT</span>
                </div>
                <div className="iconCard">
                  <img className="iconImg" src={reactIcon} alt="react-js icon"/>
                  <span>REACT</span>
                </div>
              </div>
          </div>
          </div>
        </article>
      </main>
    </div>
  )
}


export default Home;