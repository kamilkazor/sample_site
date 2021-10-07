import DogForm from "../components/DogForm";
import DogGallery from "../components/DogGallery";


const Link1 = () => {
  return (
    <div className="mainContainer">
      <main className="main">
        <article id="dogFormArticle" className="column veryLightGreenBG">
          <div className="row">
            <p>Simple gallery that uses <a href="https://dog.ceo/dog-api/">Dog API</a></p>
          </div>
          <DogForm/>
        </article>
        <article id="dogGalleryArticle" className="row veryLightGreenBG">
          <DogGallery/>
        </article>
      </main>
    </div>
  )
}

export default Link1;