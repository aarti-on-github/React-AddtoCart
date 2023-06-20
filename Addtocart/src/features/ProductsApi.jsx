import {createApi,fetchBaseQuery} from "@reduxjs/toolkit/query/react"

export const ProductsApi=createApi({
    reducerPath:"ProductsApi",
    baseQuery:fetchBaseQuery({baseUrl:"https://addtocartbackend.onrender.com/"}),
    endpoints:(builder)=>({
        getAllProducts:builder.query({
            query:()=> `products`,
        }),
    }),

});
export const { useGetAllProductsQuery}=ProductsApi;
