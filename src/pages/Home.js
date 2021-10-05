import logoIcon from "../images/logoIcon.svg";
import sampleSiteQR from "../images/sampleSiteQR.svg";

const Home = () => {
  return (
    <div className="mainContainer">
      <main className="main">
        <article id="aboutArticle" className="row">
          <img id="aboutLogoImg" src={logoIcon} alt="logo"/>
          <div className="textBox">
            <h2>About:</h2>
            <p>Sample Site is my web-dev training project.</p>
            <p>Please feel free to explore the site and see what it has to offer.</p>
          </div>
        </article>
        <article id="responsiveArticle" className="row">
          <div className="textBox">
            <h2>Responsive design:</h2>
            <p>Flexible layout, sticky navigation bar and animated mobile menu...</p>
            <p>The site was written in a way to provide a nice experience on all devices. Please resize the window or scan the QR Code with your phone to see all the features.</p>
          </div>
          <img id="responsiveQR" src={sampleSiteQR} alt="sample site QR code"/>
        </article>
      </main>
    </div>
  )
}


export default Home;