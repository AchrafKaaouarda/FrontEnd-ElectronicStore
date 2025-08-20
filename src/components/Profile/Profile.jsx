import React, { useState } from 'react';
import { FaUser, FaEnvelope, FaLock, FaEdit, FaBox, FaHistory } from 'react-icons/fa';
import './Profile.css';

const Profile = ({ user, onUpdateProfile }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: user.name,
    email: user.email,
    password: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdateProfile(formData);
    setIsEditing(false);
  };

  // Mock order history
  const orderHistory = [
    {
      id: 1,
      date: '2025-05-10',
      total: 299.99,
      status: 'Delivered',
      items: 3
    },
    {
      id: 2,
      date: '2025-05-05',
      total: 149.99,
      status: 'Processing',
      items: 2
    }
  ];

  return (
    <div className="profile-container">
      <div className="profile-header">
        <div className="profile-avatar">
          <FaUser />
          <span className="role-badge">{user.role}</span>
        </div>
        <h1>{user.name}'s Profile</h1>
      </div>

      <div className="profile-content">
        <div className="profile-section user-info">
          <div className="section-header">
            <h2>Personal Information</h2>
            <button 
              className="edit-btn"
              onClick={() => setIsEditing(!isEditing)}
            >
              <FaEdit /> {isEditing ? 'Cancel' : 'Edit'}
            </button>
          </div>

          {isEditing ? (
            <form onSubmit={handleSubmit} className="edit-form">
              <div className="form-group">
                <FaUser className="input-icon" />
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  placeholder="Full Name"
                  required
                />
              </div>
              <div className="form-group">
                <FaEnvelope className="input-icon" />
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  placeholder="Email Address"
                  required
                />
              </div>
              <div className="form-group">
                <FaLock className="input-icon" />
                <input
                  type="password"
                  value={formData.password}
                  onChange={(e) => setFormData({...formData, password: e.target.value})}
                  placeholder="New Password (optional)"
                />
              </div>
              <button type="submit" className="save-btn">Save Changes</button>
            </form>
          ) : (
            <div className="info-display">
              <p><strong>Name:</strong> {user.name}</p>
              <p><strong>Email:</strong> {user.email}</p>
              <p><strong>Member Since:</strong> May 2025</p>
            </div>
          )}
        </div>

        <div className="profile-section order-history">
          <div className="section-header">
            <h2>Order History</h2>
          </div>
          <div className="orders-list">
            {orderHistory.map(order => (
              <div key={order.id} className="order-card">
                <div className="order-header">
                  <h3>Order #{order.id}</h3>
                  <span className={`status-badge ${order.status.toLowerCase()}`}>
                    {order.status}
                  </span>
                </div>
                <div className="order-details">
                  <p><FaBox /> {order.items} items</p>
                  <p><FaHistory /> {order.date}</p>
                  <p className="order-total">${order.total}</p>
                </div>
                <button className="view-order-btn">View Details</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;