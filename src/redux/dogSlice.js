import { createSlice } from "@reduxjs/toolkit";


const dogSlice = createSlice({
  name: 'dog',
  initialState: {
    breedsData: {}
  },
  reducers: {
    setBreedsData: (state, action) => {
      return {...state, breedsData: {...action.payload}}
    }
  }
});


export const { setBreedsData } = dogSlice.actions;
export default dogSlice.reducer;