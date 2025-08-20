import React from 'react';
import { FaEdit, FaTrash, FaEye } from 'react-icons/fa';
import './DashboardTables.css';

const ProductTable = ({ products, onEdit, onDelete }) => {
  return (
    <div className="table-container">
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
                <img src={product.imageUrl} alt={product.title} className="product-thumbnail" />
              </td>
              <td>{product.title}</td>
              <td>${product.price}</td>
              <td>{product.quantity}</td>
              <td>{product.category}</td>
              <td className="actions-cell">
                <button onClick={() => onEdit(product)} className="action-btn edit">
                  <FaEdit />
                </button>
                <button onClick={() => onDelete(product.id)} className="action-btn delete">
                  <FaTrash />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;