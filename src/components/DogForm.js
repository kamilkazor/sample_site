import { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { setBreedsData, setImagesData } from "../redux/dogSlice";

const DogForm = () => {
  const breedsData = useSelector((store) => store.dog.breedsData);
  const dispatch = useDispatch();

  const [breeds, setBreeds] = useState([]);
  const [selectedBreed, setSelectedBreed] = useState("all");
  const [subBreeds, setSubBreeds] = useState([]);
  const [selectedSubBreed, setSelectedSubBreed] = useState("all");
  const [subBreedDisabled, setSubBreedDisabled] = useState(true);

  //Fetching avaliable breeds form Dog API 
  useEffect(() => {
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
  //Setting avaliable options for select inputs
  useEffect(() => {
    setBreeds(["all", ...Object.keys(breedsData)]);
  },[breedsData]);
  useEffect(() => {
    setSelectedSubBreed("all")
    selectedBreed == "all" ? setSubBreeds(["all"]) : setSubBreeds(["all", ...breedsData[selectedBreed]]);
  },[selectedBreed]);
  useEffect(() => {
    subBreeds.length > 1 ? setSubBreedDisabled(false) : setSubBreedDisabled(true);
  },[subBreeds]);

  const submitHandler = (event) => {
    event.preventDefault();
    let url = "";
    if(selectedBreed == "all"){
      url = "https://dog.ceo/api/breeds/image/random/50";
    }
    else if(selectedSubBreed == "all"){
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
  };


  return (
    <div>
      <form onSubmit={submitHandler}>
        <label htmlFor="breed">breed: </label>
        <select 
        id="breed" 
        name="breed" 
        value={selectedBreed} 
        onChange={(e) => {setSelectedBreed(e.target.value)}}
        >
          {breeds.map((breed) => <option key={breed} value={breed}>{breed}</option>)}
        </select>
        <label htmlFor="subBreed">sub-breed: </label>
        <select 
        id="subBreed" 
        name="subBreed" 
        value={selectedSubBreed} onChange={(event) => {setSelectedSubBreed(event.target.value)}}
        disabled={subBreedDisabled}
        >
          {subBreeds.map((subBreed) => <option key={subBreed} value={subBreed}>{subBreed}</option>)}
        </select>
        <input type="submit" value="search"/>
      </form>
    </div>
  );
}

export default DogForm;