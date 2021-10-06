import DogForm from "../components/DogForm";
import DogGallery from "../components/DogGallery";


const Link1 = () => {
  return (
    <div className="mainContainer">
      <main className="main">
        <article id="dogFormArticle" className="row veryLightGreenBG">
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