import React from 'react';
import { FaShoppingCart, FaStar } from 'react-icons/fa';
import './ProductCard.css';

const ProductCard = ({ product, onAddToCart, onAddToWishlist }) => {
    return (
        <div className="product-card">
            <div className="product-card-image">
                <img src={product.imageUrl} alt={product.title} />
                <button 
                    className="wishlist-btn"
                    onClick={() => onAddToWishlist(product)}
                >
                    ❤️
                </button>
            </div>
            <div className="product-card-content">
                <h3>{product.title}</h3>
                <div className="product-rating">
                    <FaStar className="star-icon" />
                    <span>{product.rating}</span>
                </div>
                <p className="product-description">{product.description}</p>
                <div className="product-price">
                    <span className="price">${product.price.toFixed(2)}</span>
                    {product.inStock ? (
                        <span className="stock in-stock">In Stock</span>
                    ) : (
                        <span className="stock out-of-stock">Out of Stock</span>
                    )}
                </div>
                <button 
                    className="add-to-cart-btn"
                    onClick={() => onAddToCart(product)}
                    disabled={!product.inStock}
                >
                    <FaShoppingCart /> Add to Cart
                </button>
            </div>
        </div>
    );
};

export default ProductCard;