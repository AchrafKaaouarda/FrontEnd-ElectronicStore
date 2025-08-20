import React from 'react';
import ProductCard from '../ProductCard/ProductCard';
import './ProductList.css';
import { FaHeart, FaShoppingCart } from 'react-icons/fa';

const ProductList = ({ products, addToCart, addToWishlist }) => {
    return (
        <div className="product-list">
            <div className="product-grid">
                {products.map(product => (
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
}

export default ProductList;