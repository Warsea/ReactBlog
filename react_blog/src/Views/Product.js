import React from 'react';
import { useParams } from 'react-router-dom';
import Loader from '../Components/Loader';
import { useAxiosGet } from '../Hooks/HttpRequests';

function Product() {
  const { id } = useParams();
  const url = `http://localhost:5000/products/${id}`;
  let product = useAxiosGet(url);

  let content = null;

  if (product.loading) {
    content = <Loader></Loader>;
  }

  if (product.data) {
    content = (
      <div>
        <h1 className="text-2xl font-bold mb-3">{product.data[0].name}</h1>
        <div>
          <img
            src={product.data[0].images[1].imageUrl}
            alt={product.data[0].name}
          />
        </div>
        <div className="font-bold text-xl mb-3">${product.data[0].price}</div>
        <div>{product.data[0].description}</div>
      </div>
    );
  }
  return <div>{content}</div>;
}

export default Product;
