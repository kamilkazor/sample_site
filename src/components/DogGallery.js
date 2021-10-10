import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { GrNext, GrPrevious } from "react-icons/gr";

const DogGallery =() => {
  const imagesData = useSelector((store) => store.dog.imagesData);
  const galleryLength = useRef(0);
  const [imagesToShow, setImagesToShow] = useState(null);
  const [showFrom, setShowFrom] = useState(0);
  const [isNextPage, setIsNextPage] = useState(false);
  const [isPrevPage, setIsPrevPage] = useState(false);
  const showLimit = 60;
  
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
  

  //Changing page with images and scrolling window to the top of gallery
  const dogGalleryRef = useRef();
  const nextPageHandler = (scrollTop) => {
    if(scrollTop){
      window.scrollTo(0, dogGalleryRef.current.offsetTop);
    }
    if(showFrom + showLimit < galleryLength.current){
      setShowFrom(showFrom + showLimit);
    }
  }
  const prevPageHandler = (scrollTop) => {
    if(scrollTop){
      window.scrollTo(0, dogGalleryRef.current.offsetTop);
    }
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
            {cols[0].map((imageSrc, index) => (
              <a href={imageSrc} target="_blank" rel="noreferrer" 
                key={`${Date.now()}-${0}-${index}:${imageSrc}`}
              >
                <img className="dogImg" src={imageSrc} alt=""/>
              </a>
            ))}
          </div>
          <div className="imgCol" key="col2">
            {cols[1].map((imageSrc, index) => (
              <a href={imageSrc} target="_blank" rel="noreferrer" 
                key={`${Date.now()}-${1}-${index}:${imageSrc}`}
              >
                <img className="dogImg" src={imageSrc} alt=""/>
              </a>
            ))}
          </div>
        </div>
        <div className="imgRow">
          <div className="imgCol" key="col3">
            {cols[2].map((imageSrc, index) => (
              <a href={imageSrc} target="_blank" rel="noreferrer" 
                key={`${Date.now()}-${2}-${index}:${imageSrc}`}
              >
                <img className="dogImg" src={imageSrc} alt=""/>
              </a>
            ))}
          </div>
          <div className="imgCol" key="col4">
            {cols[3].map((imageSrc, index) => (
              <a href={imageSrc} target="_blank" rel="noreferrer" 
                key={`${Date.now()}-${3}-${index}:${imageSrc}`}
              >
                <img className="dogImg" src={imageSrc} alt=""/>
              </a>
            ))}
          </div>
        </div>
      </div>
    )
    setImagesToShow(preparedImages)
  }
  

  return (
    <div id="dogGallery" ref={dogGalleryRef}>
      <div className="row">
        <button
          className="pageButton" 
          disabled={!isPrevPage} 
          onClick={() => {prevPageHandler(false)}}
        >
          <GrPrevious/>
        </button>
        <button 
          className="pageButton" 
          disabled={!isNextPage} 
          onClick={() => {nextPageHandler(false)}}
        >
          <GrNext/>
        </button>
      </div>
        {imagesToShow}
      <div className="row">
        <button
          className="pageButton"
          disabled={!isPrevPage}
          onClick={() => {prevPageHandler(true)}}
        >
          <GrPrevious/>
        </button>
        <button
          className="pageButton"
          disabled={!isNextPage}
          onClick={() => {nextPageHandler(true)}}
        >
          <GrNext/>
        </button>
      </div>
    </div>
  )
}


export default DogGallery;