/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import'./homepage.css'

export const HomePage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch('http://localhost:5000/products');
      if (response.ok) {
        const data = await response.json();
        setProducts(data);
      } else {
        const errorData = await response.json();
        console.error('Failed to fetch products:', errorData.error);
      }
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const handleRemove = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/products/${id}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        fetchProducts(); // Refresh the product list
        console.log('Product removed successfully!');
      } else {
        const errorData = await response.json();
        console.error('Failed to remove product:', errorData.error);
      }
    } catch (error) {
      console.error('Error removing product:', error);
    }
  };

  return (
    <div className='homepage'>
      <h1>Products</h1>
      <ul>
        {products.map((product) => (
          <li className='ting' key={product._id}>
            <h2 className='ting1'>{product.description}</h2>
            <p className='ting2'>Location: {product.location}</p>
            <p className='ting2'>Harvest Time: {product.harvestTime}</p>
            <p className='ting2'>Price: {product.price}</p>
            <p className='ting2'>Contact: {product.contact}</p>
            <button onClick={() => handleRemove(product._id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

