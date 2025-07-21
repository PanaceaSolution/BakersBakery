import { createSlice } from "@reduxjs/toolkit";
import axios from "axios"

const Status = Object.freeze({
    Loading : "loading",
    Success : "success",
    Error : "error"
})

const productSlice = createSlice({
    name : "product",
    initialState : {
        products : [],
        status : Status
    },
    reducers : {
        setProducts(state , action) {
            state.products = action.payload
        },
        setStatus(state,action) {
            state.status = action.payload
        }
    }
})

export const {setProducts , setStatus} = productSlice.actions;
export default productSlice.reducer;

export function getAllProducts() {
    return async function getAllProductsThunk(dispatch) {
        try {
            const response = await axios.get("http://localhost:3000/api/v1/products");
            if(response.status == 200) {
                dispatch(setProducts(response.data.data));
                dispatch(setStatus(Status.Success))
            }
            else {
                dispatch(setStatus(Status.Error))
            }
        } catch (error) {
            dispatch(setStatus(Status.Error))
        }
    }
}