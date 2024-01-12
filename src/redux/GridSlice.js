import { createSlice } from '@reduxjs/toolkit'

export const GridSlice = createSlice({
  name: 'gridPageState',
  initialState: {
    sortOption: 0,
    computerInfo:{},
    products:null
  },
  reducers: {
    setSortOption: (state, action) => {
      state.sortOption = action.payload;
    },
    setComputerInfo: (state, action) => {
      state.computerInfo = action.payload;
    },
    setProducts:(state, action) => {
      state.products = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { setSortOption, setComputerInfo, setProducts } = GridSlice.actions

export default GridSlice.reducer