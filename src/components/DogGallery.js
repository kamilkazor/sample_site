import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";

const DogGallery =() => {
  const imagesData = useSelector((store) => store.dog.imagesData);
  const galleryLength = useRef(0);
  const [imagesToShow, setImagesToShow] = useState([]);
  const [showFrom, setShowFrom] = useState(0);
  const showLimit = 21;

  const nextPageHandler = () => {
    if(showFrom + showLimit < galleryLength.current){
      setShowFrom(showFrom + showLimit)
    }
  }

  const prepareImages = (urls) => {
    setImagesToShow(urls.map((imageSrc) => <img className="dogImg" key={imageSrc} src={imageSrc}/>))
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
      <button onClick={nextPageHandler}>next</button>
      <div className="row">
        {imagesToShow}
      </div>
    </div>
  )
}


export default DogGallery;