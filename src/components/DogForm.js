import { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { setBreedsData } from "../redux/dogSlice";

const DogForm = () => {
  const breedsData = useSelector((store) => store.dog.breedsData);
  const dispatch = useDispatch();

  const [breeds, setBreeds] = useState([]);
  const [selectedBreed, setSelectedBreed] = useState("all");
  const [subBreeds, setSubBreeds] = useState([])
  const [selectedSubBreed, setSelectedSubBreed] = useState("all");

  //Fetching avaliable breeds form Dog API 
  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/list/all')
      .then((res) => {
        if(res.ok){
          return res.json()
        }
        else{
          throw Error;
        }
      })
      .then((data) => {
        dispatch(setBreedsData({...data.message}))
      })
      .catch((err) => {
        console.log(err)
      })
  },[]);
  //Setting avaliable options for select inputs
  useEffect(() => {
    setBreeds(["all", ...Object.keys(breedsData)]);
  },[breedsData])
  useEffect(() => {
    setSelectedSubBreed("all")
    selectedBreed == "all" ? setSubBreeds(["all"]) : setSubBreeds(["all", ...breedsData[selectedBreed]])
  },[selectedBreed])



  return (
    <div>
      <form>
        <label htmlFor="breed">breed: </label>
        <select id="breed" name="breed" value={selectedBreed} onChange={(e) => {setSelectedBreed(e.target.value)}}>
          {breeds.map((breed) => <option key={breed} value={breed}>{breed}</option>)}
        </select>
        <label htmlFor="subBreed">sub-breed: </label>
        <select id="subBreed" name="subBreed" value={selectedSubBreed} onChange={(e) => {setSelectedSubBreed(e.target.value)}}>
          {subBreeds.map((subBreed) => <option key={subBreed} value={subBreed}>{subBreed}</option>)}
        </select>
      </form>
    </div>
  )
}

export default DogForm;