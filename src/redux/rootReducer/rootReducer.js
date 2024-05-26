import { combineReducers } from '@reduxjs/toolkit';
import productReducer from '../slice/productSlice';
import cartReducer from '../slice/cartSlice'
import authReducer from "../slice/authSlice"
const rootReducer = combineReducers({
  
  product: productReducer,
  cartProducts: cartReducer,
  auth:authReducer
  
});

export default rootReducer;