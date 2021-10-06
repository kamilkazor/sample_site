import { useEffect } from "react";

const DogForm = () => {


  return (
    <div>
      <form>
        <label for="breed">breed</label>
        <select id="breed" name="breed">

        </select>
        <label for="subBreed">sub-breed</label>
        <select id="subBreed" name="subBreed">
          
        </select>
      </form>
    </div>
  )
}

export default DogForm;