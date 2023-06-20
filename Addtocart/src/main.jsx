import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {configureStore} from "@reduxjs/toolkit";
import { Provider } from 'react-redux';
import ProductsReducer, { productsFecth } from './features/Productslice.jsx';
import { ProductsApi } from './features/ProductsApi.jsx';
import CartReducer from './features/CartSlice.jsx';
import { getTotals } from './features/CartSlice.jsx';

const store=configureStore({
  reducer:{
    products:ProductsReducer,
    cart:CartReducer,
    [ProductsApi.reducerPath]:ProductsApi.reducer,

  },
  middleware:(getDefaultMiddleware)=>
  getDefaultMiddleware().concat(ProductsApi.middleware),
});

store.dispatch(productsFecth());
store.dispatch(getTotals());

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
)
