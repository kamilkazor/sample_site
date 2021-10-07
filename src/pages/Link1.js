import DogForm from "../components/DogForm";
import DogGallery from "../components/DogGallery";

import { useSelector } from "react-redux";

const Link1 = () => {
  const fetchError = useSelector((store) => store.dog.fetchError)

  return (
    <div className="mainContainer">
      <main className="main">
        <article id="dogFormArticle" className="column veryLightGreenBG">
          <div className="row">
            <p>Simple gallery that uses <a href="https://dog.ceo/dog-api/">Dog API</a></p>
          </div>
          <DogForm/>
          {fetchError && <div className="row">
              <p>The app was unable to fetch data from <a href="https://dog.ceo/dog-api/">Dog API</a>. Please try again later.</p>
            </div>}
        </article>
        <article id="dogGalleryArticle" className="row veryLightGreenBG">
          <DogGallery/>
        </article>
      </main>
    </div>
  )
}

export default Link1;