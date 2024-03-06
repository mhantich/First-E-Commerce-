import axios from 'axios'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'


const initialState = {
  loading: false,
  Product: [],
  Brand: [],
  error: false
}

// Generates pending, fulfilled and rejected action types
export const fetchProduct = createAsyncThunk('user/fetchProduct',async() => {
  return axios
    .get('https://makeup-api.herokuapp.com/api/v1/products.json')
    .then(response => response.data)
})

const products = createSlice({
  name: 'Product',
  initialState,
  extraReducers: builder => {
    builder.addCase(fetchProduct.pending, state => {
      state.loading = true
    })
    builder.addCase(fetchProduct.fulfilled, (state, action) => {
      state.loading = false
      state.Product = action.payload
      state.Brand = action.payload.map(product => product.product_type)
      state.error = false
    })
    builder.addCase(fetchProduct.rejected, (state, action) => {
      state.loading = false
      state.Product = []
      state.error =true
    })
  }
})


export default products.reducer