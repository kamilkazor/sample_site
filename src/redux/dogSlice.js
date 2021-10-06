import { createSlice } from "@reduxjs/toolkit";


const dogSlice = createSlice({
  name: 'dog',
  initialState: {
    breedsData: {},
    imagesData: []
  },
  reducers: {
    setBreedsData: (state, action) => {
      return {...state, breedsData: {...action.payload}}
    },
    setImagesData: (state, action) => {
      return {...state, imagesData: [...action.payload]}
    },
  }
});


export const { setBreedsData, setImagesData } = dogSlice.actions;
export default dogSlice.reducer;