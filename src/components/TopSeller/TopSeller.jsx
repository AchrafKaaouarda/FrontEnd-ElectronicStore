import React from 'react';
import ProductCard from '../ProductCard/ProductCard';
import './TopSeller.css';

const TopSeller = ({ products, addToCart, addToWishlist }) => {
  // Filter top-rated products (rating >= 4.5)
  const topProducts = products
    .filter(product => product.rating >= 4.5)
    .sort((a, b) => b.rating - a.rating);

  return (
    <div className="top-seller">
      <div className="top-seller-header">
        <h2>Top Rated Products</h2>
        <p>Our best-selling products with highest customer ratings</p>
      </div>
      
      <div className="top-products-grid">
        {topProducts.map(product => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={addToCart}
            onAddToWishlist={addToWishlist}
          />
        ))}
      </div>
    </div>
  );
};

export default TopSeller;