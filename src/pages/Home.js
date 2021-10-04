import logoIcon from "../images/logoIcon.svg";
import sampleSiteQR from "../images/sampleSiteQR.svg";

const Home = () => {
  return (
    <div className="mainContainer">
      <main className="main">
        <article className="about row">
          <img className="aboutLogoImg" src={logoIcon} alt="logo"/>
          <div className="aboutText">
            <h2>About:</h2>
            <p>Sample Site is my web-dev training project.</p>
            <p>Please feel free to explore the site and see what it has to offer.</p>
          </div>
        </article>
        <article className="responsive row">
          <div className="responsiveText">
            <h2>Responsive design:</h2>
            <p>Flexible layout, sticky navigation bar and animated mobile menu...</p>
            <p>The site was written the way to provide a nice experience on all devices.</p>
            <p>Please resize the window or scan the QR Code with your phone to see all the features.</p>
          </div>
          <img className="responsiveQR" src={sampleSiteQR} alt="logo"/>
        </article>
      </main>
    </div>
  )
}


export default Home;