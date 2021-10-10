import underConstructionIcon from "../images/underConstruction2.svg";

const Empty2 = () => {
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

export default Empty2;