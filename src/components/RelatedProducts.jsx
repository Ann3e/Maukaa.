import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from './Title';  // Assuming you have a Title component for the heading.

const RelatedProducts = ({ category, subCategory }) => {
  const { products } = useContext(ShopContext);
  const [related, setRelated] = useState([]);

  useEffect(() => {
    if (products.length > 0) {
      let productsCopy = products.slice();
      productsCopy = productsCopy.filter((item) => category === item.category);
      productsCopy = productsCopy.filter((item) => subCategory === item.subCategory);
      setRelated(productsCopy.slice(0, 5)); // Fix slice usage here
    }
  }, [products, category, subCategory]);

  return (
    <div className='my-24'>
      <div className='text-center text-3xl py-2'>
        <Title text1={'RELATED'} text={"PRODUCTS"} />
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {related.length > 0 ? (
          related.map((product, index) => (
            <div key={index} className="border p-4">
              <h3 className="text-xl font-semibold">{product.name}</h3>
              <p className="text-gray-700">{product.price}</p>
              {/* Add any additional product details here */}
            </div>
          ))
        ) : (
          <p>No related products available.</p>
        )}
      </div>
    </div>
  );
};

export default RelatedProducts;