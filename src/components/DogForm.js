import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { setBreedsData } from "../redux/dogSlice";

const DogForm = () => {
  const breedsData = useSelector((store) => store.dog.breedsData);
  const dispatch = useDispatch();

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
  },[])



  return (
    <div>
      <form>
        <label htmlFor="breed">breed</label>
        <select id="breed" name="breed">

        </select>
        <label htmlFor="subBreed">sub-breed</label>
        <select id="subBreed" name="subBreed">
          
        </select>
      </form>
    </div>
  )
}

export default DogForm;