import React from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import Invoice from './Invoice';
import { FaCheckCircle, FaFilePdf } from 'react-icons/fa';
import './OrderConfirmation.css';

const OrderConfirmation = ({ order, onClose }) => {
  return (
    <div className="order-confirmation">
      <div className="confirmation-content">
        <FaCheckCircle className="success-icon" />
        <h2>Order Confirmed!</h2>
        <p>Order ID: #{order.id}</p>
        <div className="order-summary">
          <h3>Order Summary</h3>
          <div className="summary-items">
            {order.items.map(item => (
              <div key={item.id} className="summary-item">
                <span>{item.title}</span>
                <span>{item.quantity} x ${item.price}</span>
              </div>
            ))}
          </div>
          <div className="total">
            <span>Total</span>
            <span>${order.total.toFixed(2)}</span>
          </div>
        </div>
        <div className="confirmation-actions">
          <PDFDownloadLink
            document={<Invoice order={order} />}
            fileName={`invoice-${order.id}.pdf`}
            className="download-invoice"
          >
            {({ loading }) =>
              loading ? 'Generating PDF...' : (
                <>
                  <FaFilePdf /> Facture
                </>
              )
            }
          </PDFDownloadLink>
          <button onClick={onClose} className="close-btn">
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation;