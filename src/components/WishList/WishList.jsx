import React from 'react';
import './WishList.css';

const WishList = ({ wishlist, removeFromWishlist, addToCart }) => {
  return (
    <div className="wishlist">
      <h2>My Wishlist</h2>
      {wishlist.length === 0 ? (
        <p>Your wishlist is empty</p>
      ) : (
        <div className="wishlist-items">
          {wishlist.map(item => (
            <div key={item.id} className="wishlist-item">
              <img src={item.imageUrl} alt={item.title} />
              <div className="item-details">
                <h3>{item.title}</h3>
                <p>${item.price}</p>
                <div className="item-actions">
                  <button onClick={() => addToCart(item)}>Add to Cart</button>
                  <button 
                    onClick={() => removeFromWishlist(item.id)}
                    className="remove-btn"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default WishList;