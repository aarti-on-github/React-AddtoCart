import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"

const initialState={
    items:[],
    status:null
}

export const productsFecth=createAsyncThunk(
    "products/productsFetch",
    async()=>{
       const response= await axios.get("http://localhost:5000/products");
       return response?.data;
    }
)

const productSlice=createSlice({
    name:"products",
    initialState,
    reducers:{},
    extraReducers:{
        [productsFecth.pending]:(state,action)=>{
            state.status="pending";
        },
          [productsFecth.fulfilled]:(state,action)=>{
            state.status="success";
            state.item=action.payload;
        },
        [productsFecth.rejected]:(state,action)=>{
            state.status="rejected";
        }
    }
    }
)

export default productSlice.reducer;