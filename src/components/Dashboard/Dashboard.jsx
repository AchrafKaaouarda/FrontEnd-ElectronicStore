import React, { useState } from 'react';
import { FaBox, FaUsers, FaChartLine, FaCog, FaEdit, FaTrash, FaPlus, FaReceipt, FaEye, FaTimes } from 'react-icons/fa';
import './Dashboard.css';

// Mock data for orders
const mockOrders = [
  {
    id: 1,
    customer: "John Doe",
    date: "2025-05-11",
    status: "Completed",
    total: 299.99,
    items: [
      { id: 1, name: "iPhone 13", quantity: 1, price: 999.99 },
      { id: 2, name: "AirPods Pro", quantity: 1, price: 249.99 }
    ]
  },
  // Add more mock orders...
];

const AddProductModal = ({ onClose, onAdd }) => (
  <div className="modal">
    <div className="modal-content">
      <div className="modal-header">
        <h2>Add New Product</h2>
        <button onClick={onClose} className="close-btn"><FaTimes /></button>
      </div>
      <form onSubmit={(e) => {
        e.preventDefault();
        onAdd({
          id: Date.now(),
          name: e.target.name.value,
          price: parseFloat(e.target.price.value),
          stock: parseInt(e.target.stock.value),
          category: e.target.category.value,
          imageUrl: e.target.imageUrl.value
        });
      }}>
        <input name="name" type="text" placeholder="Product Name" required />
        <input name="price" type="number" placeholder="Price" required />
        <input name="stock" type="number" placeholder="Stock" required />
        <input name="category" type="text" placeholder="Category" required />
        <input name="imageUrl" type="text" placeholder="Image URL" required />
        <div className="modal-actions">
          <button type="submit" className="btn-primary">Add Product</button>
          <button type="button" onClick={onClose} className="btn-secondary">Cancel</button>
        </div>
      </form>
    </div>
  </div>
);

const OrderDetailsModal = ({ order, onClose }) => (
  <div className="modal">
    <div className="modal-content">
      <div className="modal-header">
        <h2>Order Details</h2>
        <button onClick={onClose} className="close-btn"><FaTimes /></button>
      </div>
      <div className="order-details">
        <div className="order-info">
          <p><strong>Order ID:</strong> #{order.id}</p>
          <p><strong>Customer:</strong> {order.customer}</p>
          <p><strong>Date:</strong> {order.date}</p>
          <p><strong>Status:</strong> 
            <span className={`status-badge ${order.status.toLowerCase()}`}>
              {order.status}
            </span>
          </p>
        </div>
        <div className="order-items">
          <h3>Items</h3>
          <table className="items-table">
            <thead>
              <tr>
                <th>Item</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {order.items.map(item => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.quantity}</td>
                  <td>${item.price}</td>
                  <td>${(item.quantity * item.price).toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="order-total">
          <h3>Total: ${order.total}</h3>
        </div>
      </div>
    </div>
  </div>
);

const Dashboard = ({ products, users }) => {
  const [activeTab, setActiveTab] = useState('products');
  const [showAddProduct, setShowAddProduct] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const [showOrderDetails, setShowOrderDetails] = useState(null);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  // Product management functions
  const handleAddProduct = (newProduct) => {
    console.log('Adding new product:', newProduct);
    setShowAddProduct(false);
  };

  const handleEditProduct = (product) => {
    setEditingProduct(product);
  };

  const handleDeleteProduct = (productId) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      console.log('Deleting product:', productId);
    }
  };

  // User management functions
  const handleDeleteUser = (userId) => {
    console.log('Deleting user:', userId);
  };

  // Order management functions
  const handleViewOrder = (order) => {
    setShowOrderDetails(order);
  };

  const ProductsTable = () => (
    <div className="table-wrapper">
      <table className="dashboard-table">
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Category</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>
                <img src={product.imageUrl} alt={product.name} className="product-thumbnail" />
              </td>
              <td>{product.name}</td>
              <td>${product.price}</td>
              <td>{product.stock}</td>
              <td>{product.category}</td>
              <td>
                <div className="action-buttons">
                  <button onClick={() => handleEditProduct(product)} className="btn-edit">
                    <FaEdit />
                  </button>
                  <button onClick={() => handleDeleteProduct(product.id)} className="btn-delete">
                    <FaTrash />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  const OrdersTable = () => (
    <div className="table-wrapper">
      <table className="dashboard-table">
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Customer</th>
            <th>Date</th>
            <th>Status</th>
            <th>Total</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {mockOrders.map((order) => (
            <tr key={order.id}>
              <td>#{order.id}</td>
              <td>{order.customer}</td>
              <td>{order.date}</td>
              <td>
                <span className={`status-badge ${order.status.toLowerCase()}`}>
                  {order.status}
                </span>
              </td>
              <td>${order.total}</td>
              <td>
                <button onClick={() => handleViewOrder(order)} className="btn-view">
                  <FaEye />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  return (
    <div className={`dashboard-container ${isSidebarCollapsed ? 'sidebar-collapsed' : ''}`}>
      <aside className="sidebar">
        <div className="sidebar-header">
          <h2>Admin Dashboard</h2>
          <button 
            className="toggle-sidebar"
            onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
          >
            {isSidebarCollapsed ? '→' : '←'}
          </button>
        </div>
        <nav className="sidebar-nav">
          <button 
            className={`nav-item ${activeTab === 'products' ? 'active' : ''}`}
            onClick={() => setActiveTab('products')}
          >
            <FaBox /> Products
          </button>
          <button 
            className={`nav-item ${activeTab === 'orders' ? 'active' : ''}`}
            onClick={() => setActiveTab('orders')}
          >
            <FaReceipt /> Orders
          </button>
          <button 
            className={`nav-item ${activeTab === 'users' ? 'active' : ''}`}
            onClick={() => setActiveTab('users')}
          >
            <FaUsers /> Users
          </button>
          <button 
            className={`nav-item ${activeTab === 'analytics' ? 'active' : ''}`}
            onClick={() => setActiveTab('analytics')}
          >
            <FaChartLine /> Analytics
          </button>
        </nav>
      </aside>

      <main className="dashboard-main">
        <div className="stats-grid">
          <div className="stat-card">
            <h3>Products</h3>
            <p>{products.length}</p>
          </div>
          <div className="stat-card">
            <h3>Users</h3>
            <p>{users.length}</p>
          </div>
          <div className="stat-card">
            <h3>Orders</h3>
            <p>{mockOrders.length}</p>
          </div>
          <div className="stat-card">
            <h3>Revenue</h3>
            <p>$15,420</p>
          </div>
        </div>

        <div className="content-header">
          <h1>{activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}</h1>
          {activeTab === 'products' && (
            <button onClick={() => setShowAddProduct(true)} className="btn-add">
              <FaPlus /> Add Product
            </button>
          )}
        </div>

        <div className="content-body">
          {activeTab === 'products' && <ProductsTable />}
          {activeTab === 'orders' && <OrdersTable />}
          {activeTab === 'users' && (
            <div className="users-grid">
              {users.map(user => (
                <div key={user.id} className="user-card">
                  <h3>{user.name}</h3>
                  <p>{user.email}</p>
                  <span className={`role-badge ${user.role}`}>{user.role}</span>
                  {user.role !== 'admin' && (
                    <button onClick={() => handleDeleteUser(user.id)} className="btn-delete">
                      <FaTrash /> Remove
                    </button>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>

        {showAddProduct && (
          <AddProductModal 
            onClose={() => setShowAddProduct(false)}
            onAdd={(newProduct) => {
              console.log('New product:', newProduct);
              setShowAddProduct(false);
            }}
          />
        )}

        {showOrderDetails && (
          <OrderDetailsModal
            order={showOrderDetails}
            onClose={() => setShowOrderDetails(null)}
          />
        )}
      </main>
    </div>
  );
};

export default Dashboard;