import React from 'react';
import { FaEye } from 'react-icons/fa';

const mockOrders = [
  {
    id: 1,
    customer: "John Doe",
    date: "2025-05-11",
    status: "Completed",
    total: 299.99,
    items: 3
  },
  {
    id: 2,
    customer: "Jane Smith",
    date: "2025-05-10",
    status: "Processing",
    total: 149.99,
    items: 2
  },
  // Add more mock orders...
];

const OrdersTable = ({ onViewOrder }) => {
  return (
    <div className="table-container">
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
              <td className="actions-cell">
                <button onClick={() => onViewOrder(order)} className="action-btn view">
                  <FaEye />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrdersTable;