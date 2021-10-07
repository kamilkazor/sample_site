import { createSlice } from "@reduxjs/toolkit";


const dogSlice = createSlice({
  name: 'dog',
  initialState: {
    breedsData: {},
    imagesData: [],
    fetchError: false,
  },
  reducers: {
    setBreedsData: (state, action) => {
      return {...state, breedsData: {...action.payload}}
    },
    setImagesData: (state, action) => {
      return {...state, imagesData: [...action.payload]}
    },
    setFetchError: (state, action) => {
      return {...state, fetchError: action.payload}
    },
  }
});


export const { setBreedsData, setImagesData, setFetchError } = dogSlice.actions;
export default dogSlice.reducer;