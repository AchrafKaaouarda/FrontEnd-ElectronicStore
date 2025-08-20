import React, { useState } from 'react';
import { FaTrash, FaMinus, FaPlus, FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import OrderConfirmation from './OrderConfirmation';
import './Cart.css';

const Cart = ({ items, onRemove, updateQuantity }) => {
  const navigate = useNavigate();
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [currentOrder, setCurrentOrder] = useState(null);

  const calculateTotal = () => {
    return items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  };

  const handleQuantityChange = (item, change) => {
    const newQuantity = Math.max(1, item.quantity + change);
    updateQuantity(item.id, newQuantity);
  };

  const handleCheckout = () => {
    const order = {
      id: Date.now(),
      items: items,
      total: calculateTotal(),
      customer: {
        name: "John Doe", // Replace with actual user data
        email: "john@example.com"
      },
      date: new Date()
    };
    setCurrentOrder(order);
    setShowConfirmation(true);
  };

  if (items.length === 0) {
    return (
      <div className="cart-empty">
        <h2>Your Cart is Empty</h2>
        <p>Add some products to your cart to see them here!</p>
        <button onClick={() => navigate('/')} className="continue-shopping">
          <FaArrowLeft /> Continue Shopping
        </button>
      </div>
    );
  }

  return (
    <>
      <div className="cart-container">
        <div className="cart-header">
          <h2>Shopping Cart</h2>
          <span className="item-count">{items.length} items</span>
        </div>

        <div className="cart-content">
          <div className="cart-items">
            {items.map(item => (
              <div key={item.id} className="cart-item">
                <div className="item-image">
                  <img src={item.imageUrl} alt={item.title} />
                </div>
                
                <div className="item-details">
                  <h3>{item.title}</h3>
                  <p className="item-description">{item.description}</p>
                  <div className="item-price">${item.price.toFixed(2)}</div>
                </div>

                <div className="quantity-controls">
                  <button 
                    onClick={() => handleQuantityChange(item, -1)}
                    className="quantity-btn"
                  >
                    <FaMinus />
                  </button>
                  <span className="quantity">{item.quantity}</span>
                  <button 
                    onClick={() => handleQuantityChange(item, 1)}
                    className="quantity-btn"
                  >
                    <FaPlus />
                  </button>
                </div>

                <div className="item-total">
                  ${(item.price * item.quantity).toFixed(2)}
                </div>

                <button 
                  onClick={() => onRemove(item.id)}
                  className="remove-btn"
                >
                  <FaTrash />
                </button>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <h3>Order Summary</h3>
            <div className="summary-item">
              <span>Subtotal</span>
              <span>${calculateTotal().toFixed(2)}</span>
            </div>
            <div className="summary-item">
              <span>Shipping</span>
              <span>Free</span>
            </div>
            <div className="summary-divider"></div>
            <div className="summary-total">
              <span>Total</span>
              <span>${calculateTotal().toFixed(2)}</span>
            </div>
            <button 
              onClick={handleCheckout} 
              className="checkout-btn"
              disabled={items.length === 0}
            >
              Proceed to Checkout
            </button>
            <button 
              onClick={() => navigate('/')} 
              className="continue-shopping"
            >
              <FaArrowLeft /> Continue Shopping
            </button>
          </div>
        </div>
      </div>

      {showConfirmation && currentOrder && (
        <OrderConfirmation
          order={currentOrder}
          onClose={() => setShowConfirmation(false)}
        />
      )}
    </>
  );
};

export default Cart;