import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { GrNext, GrPrevious } from "react-icons/gr";

const DogGallery =() => {
  const imagesData = useSelector((store) => store.dog.imagesData);
  const galleryLength = useRef(0);
  const [imagesToShow, setImagesToShow] = useState(null);
  const [showFrom, setShowFrom] = useState(0);
  const [isNextPage, setIsNextPage] =useState(false);
  const [isPrevPage, setIsPrevPage] =useState(false);
  const showLimit = 60;

  const nextPageHandler = () => {
    window.scrollTo(0, 0);
    if(showFrom + showLimit < galleryLength.current){
      setShowFrom(showFrom + showLimit);
    }
  }
  const prevPageHandler = () => {
    window.scrollTo(0, 0);
    if(showFrom > 0 + showLimit){
      setShowFrom(showFrom - showLimit);
    }
    else {
      setShowFrom(0);
    }
  }


  //Sets imagesToShow to prepared JSX
  const prepareImages = (srcs) => {
    let colIndex = 0;
    const cols =[[],[],[],[]];
    for(let imageIndex in srcs){
      if(colIndex > cols.length - 1) colIndex = 0;
      cols[colIndex].push(srcs[imageIndex])
      colIndex += 1;
    }
    const preparedImages = (
      <div className="imgRow">
        <div className="imgRow">
          <div className="imgCol" key="col1">
            {cols[0].map((imageSrc) => (
              <a href={imageSrc} target="_blank" rel="noreferrer" key={imageSrc}>
                <img className="dogImg" src={imageSrc} alt=""/>
              </a>
            ))}
          </div>
          <div className="imgCol" key="col2">
            {cols[1].map((imageSrc) => (
              <a href={imageSrc} target="_blank" rel="noreferrer" key={imageSrc}>
                <img className="dogImg" src={imageSrc} alt=""/>
              </a>
            ))}
          </div>
        </div>
        <div className="imgRow">
          <div className="imgCol" key="col3">
            {cols[2].map((imageSrc) => (
              <a href={imageSrc} target="_blank" rel="noreferrer" key={imageSrc}>
                <img className="dogImg" src={imageSrc} alt=""/>
              </a>
            ))}
          </div>
          <div className="imgCol" key="col4">
            {cols[3].map((imageSrc) => (
              <a href={imageSrc} target="_blank" rel="noreferrer" key={imageSrc}>
                <img className="dogImg" src={imageSrc} alt=""/>
              </a>
            ))}
          </div>
        </div>
      </div>
    )
    setImagesToShow(preparedImages)
  }
  

  useEffect(() => {
    galleryLength.current = imagesData.length;
    setShowFrom(0);
    prepareImages(imagesData.slice(showFrom, showLimit))
  },[imagesData])

  useEffect(() => {
    prepareImages(imagesData.slice(showFrom, showFrom + showLimit));
  },[showFrom])

  useEffect(() => {
    showFrom === 0 ? setIsPrevPage(false) : setIsPrevPage(true);
    showFrom + showLimit >= galleryLength.current ? setIsNextPage(false) : setIsNextPage(true);
  },[imagesToShow])

  return (
    <div id="dogGallery">
      <div className="row">
        <button className="pageButton" disabled={!isPrevPage} onClick={prevPageHandler}><GrPrevious/></button>
        <button className="pageButton" disabled={!isNextPage} onClick={nextPageHandler}><GrNext/></button>
      </div>
        {imagesToShow}
      <div className="row">
        <button className="pageButton" disabled={!isPrevPage} onClick={prevPageHandler}><GrPrevious/></button>
        <button className="pageButton" disabled={!isNextPage} onClick={nextPageHandler}><GrNext/></button>
      </div>
    </div>
  )
}


export default DogGallery;