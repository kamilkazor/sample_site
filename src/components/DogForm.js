import { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { setBreedsData, setImagesData } from "../redux/dogSlice";

const DogForm = () => {
  const breedsData = useSelector((store) => store.dog.breedsData);
  const dispatch = useDispatch();

  const [breeds, setBreeds] = useState([]);
  const [selectedBreed, setSelectedBreed] = useState("random 50");
  const [subBreeds, setSubBreeds] = useState([]);
  const [selectedSubBreed, setSelectedSubBreed] = useState("all");
  const [subBreedDisabled, setSubBreedDisabled] = useState(true);


  //Setting avaliable options for select inputs
  useEffect(() => {
    setBreeds(["random 50", ...Object.keys(breedsData)]);
  },[breedsData]);
  useEffect(() => {
    setSelectedSubBreed("all")
    selectedBreed === "random 50" ? setSubBreeds(["all"]) : setSubBreeds(["all", ...breedsData[selectedBreed]]);
  },[selectedBreed]);
  useEffect(() => {
    subBreeds.length > 1 ? setSubBreedDisabled(false) : setSubBreedDisabled(true);
  },[subBreeds]);
  
  
  //Creating proper url and fetching avaliable breeds
  const fetchImagesData = () => {
    let url = "";
    if(selectedBreed === "random 50"){
      url = "https://dog.ceo/api/breeds/image/random/50";
    }
    else if(selectedSubBreed === "all"){
      url = `https://dog.ceo/api/breed/${selectedBreed}/images`;
    }
    else{
      url = `https://dog.ceo/api/breed/${selectedBreed}/${selectedSubBreed}/images`;
    }
    fetch(url)
    .then((res) => {
      if(res.ok){
        return res.json();
      }
      else{
        throw Error;
      }
    })
    .then((data) => {
      dispatch(setImagesData([...data.message]));
    })
    .catch((err) => {
      console.log(err);
    })
  }
  //Fetching avaliable breeds form Dog API and random images on component first render
  useEffect(() => {
    fetchImagesData();
    fetch('https://dog.ceo/api/breeds/list/all')
    .then((res) => {
      if(res.ok){
        return res.json();
      }
      else{
        throw Error;
      }
    })
    .then((data) => {
      dispatch(setBreedsData({...data.message}));
    })
    .catch((err) => {
      console.log(err);
    })
  },[]);


  const submitHandler = (event) => {
    event.preventDefault();
    fetchImagesData();
  };


  return (
    <div>
      <form onSubmit={submitHandler} id="dogForm">
        <div className="selectContainer">
          <label htmlFor="breed">breed: </label>
          <select 
          id="breed" 
          name="breed" 
          value={selectedBreed} 
          onChange={(e) => {setSelectedBreed(e.target.value)}}
          >
            {breeds.map((breed) => <option key={breed} value={breed}>{breed}</option>)}
          </select>         
        </div>
        <div className="selectContainer">
        <label htmlFor="subBreed">sub-breed: </label>
        <select 
        id="subBreed" 
        name="subBreed" 
        value={selectedSubBreed} onChange={(event) => {setSelectedSubBreed(event.target.value)}}
        disabled={subBreedDisabled}
        >
          {subBreeds.map((subBreed) => <option key={subBreed} value={subBreed}>{subBreed}</option>)}
        </select>
        </div>
        <input type="submit" value="search"/>
      </form>
    </div>
  );
}

export default DogForm;