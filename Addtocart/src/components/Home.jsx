
import { useDispatch } from 'react-redux';
import React from 'react'
import { useGetAllProductsQuery } from '../features/ProductsApi'
import { addTocart } from '../features/CartSlice';
import {useNavigate} from 'react-router-dom';
//import { useSelector } from 'react-redux';

function Home() {
  const { data, error, isLoading } = useGetAllProductsQuery();
  const dispatch=useDispatch();
  const handelAddtoCart=(product)=>{
   dispatch(addTocart(product));
   navigate("/Cart");
  }

  const navigate=useNavigate();

  return (
    <div className='home-container'>
      {isLoading ?
        <p>Loading...</p> :
        error ?
          <p>An error is occured</p> :
          <>
            <h2>New Arrivals</h2>
            <div className="products">
              {data?.map((product) => <div key={product.id} className='product'>
                <h3>{product.name}</h3>
                <img src={product.image} alt={product.name} />
                <div className="details">
                  <span>{product.desc}</span>
                  <span className="price">${product.price}</span>

                </div>
                <button onClick={()=>handelAddtoCart(product)}>Add to Cart</button>
              </div>)}
            </div>
          </>
      }
    </div>
  )
}

export default Home
