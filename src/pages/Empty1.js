import underConstructionIcon from "../images/underConstruction.svg";

const Empty1 = () => {
  return (
    <div className="mainContainer">
      <main className="main">
        <article id="emptyArticle" className="column veryLightGreenBG">
          <img id="underConstructionIcon" src={underConstructionIcon} alt="under construction icon"/>
          <div className="row">
            <p>Nothing here yet.</p>
          </div>
        </article>
      </main>
    </div>
  )
}

export default Empty1;