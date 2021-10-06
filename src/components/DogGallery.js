import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";

const DogGallery =() => {
  const imagesData = useSelector((store) => store.dog.imagesData);
  const galleryLength = useRef(0);
  const [imagesToShow, setImagesToShow] = useState(null);
  const [showFrom, setShowFrom] = useState(0);
  const showLimit = 60;

  const nextPageHandler = () => {
    if(showFrom + showLimit < galleryLength.current){
      setShowFrom(showFrom + showLimit);
    }
  }
  const prevPageHandler = () => {
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
        <div className="imgCol" key="col1">
          {cols[0].map((imageSrc) => (
          <a href={imageSrc} target="_blank" key={imageSrc}><img className="dogImg" src={imageSrc}/></a>
          ))}
        </div>
        <div className="imgCol" key="col2">
          {cols[1].map((imageSrc) => (
          <a href={imageSrc} target="_blank" key={imageSrc}><img className="dogImg" src={imageSrc}/></a>
          ))}
        </div>
        <div className="imgCol" key="col3">
          {cols[2].map((imageSrc) => (
          <a href={imageSrc} target="_blank" key={imageSrc}><img className="dogImg" src={imageSrc}/></a>
          ))}
        </div>
        <div className="imgCol" key="col4">
          {cols[3].map((imageSrc) => (
          <a href={imageSrc} target="_blank" key={imageSrc}><img className="dogImg" src={imageSrc}/></a>
          ))}
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

  return (
    <div>
      <div className="row">
        <button onClick={prevPageHandler}>prev</button>
        <button onClick={nextPageHandler}>next</button>
      </div>
        {imagesToShow}
      <div className="row">
        <button onClick={prevPageHandler}>prev</button>
        <button onClick={nextPageHandler}>next</button>
      </div>
    </div>
  )
}


export default DogGallery;