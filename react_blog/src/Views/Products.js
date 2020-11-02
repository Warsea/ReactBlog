import React from 'react';
import ProductCard from '../Components/ProductCard';
import Loader from '../Components/Loader';
import { useAxiosGet } from '../Hooks/HttpRequests';

function Products() {
  // this url variable should be the link to your products api
  const url = 'http://localhost:5000/products';

  let products = useAxiosGet(url);

  let content = null;

  if (products.loading) {
    content = <Loader></Loader>;
  }

  if (products.data) {
    content = products.data.map((product, key) => (
      <div key={key}>
        <ProductCard product={product} />
      </div>
    ));
  }

  return <div>{content}</div>;
}

export default Products;
