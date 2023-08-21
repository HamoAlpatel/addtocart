import { createSlice } from "@reduxjs/toolkit";
import Products from "../../comp/Products";

export const cartSlice = createSlice({
    initialState:[],
    name:"cartSlice",
    reducers:{
        addToCart:(state,action)=>{
          const findProduct =  state.find(product=>product.id == action.payload.id)
          if (findProduct) {
            findProduct.quantity+=1;
          }else{
            let productClone = {...action.payload,quantity:1}
            state.push(productClone);
              // return productClone
          }
        },
        deleteFromCart:(state,action)=>{
            return state.filter((product)=>product.id != action.payload.id)
        },
        clear:(state,action)=>{
            return []
        },
        plus:(state,action)=>{
          const findProduct =  state.find(product=>product.id == action.payload.id)
          findProduct.quantity+=1
        },
        minus:(state,action)=>{
          const findProduct =  state.find(product=>product.id == action.payload.id)
          if (findProduct.quantity == 1) {
            return state.filter((product)=>product.id != action.payload.id)
          }else{
            findProduct.quantity-=1

          }
        }
    }
})

export const {addToCart,deleteFromCart,clear,plus,minus} = cartSlice.actions;
export default cartSlice.reducer;