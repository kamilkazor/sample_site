import logoIcon from "../images/logoIcon.svg";

const Home = () => {
  return (
    <div className="mainContainer">
      <main className="main">
        <article className="about row">
          <div className="aboutText">
            <h2>About:</h2>
            <p>Sample Site is my web-dev training project.</p>
            <p>Please feel free to explore the site and see what it has to offer.</p>
          </div>
          <img className="aboutLogoImg" src={logoIcon} alt="logo"/>
        </article>
      </main>
    </div>
  )
}


export default Home;