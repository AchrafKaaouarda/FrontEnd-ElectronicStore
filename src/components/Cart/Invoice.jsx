import React from 'react';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontFamily: 'Helvetica'
  },
  header: {
    marginBottom: 30,
    borderBottom: '1 solid #eee'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10
  },
  orderInfo: {
    marginBottom: 30
  },
  table: {
    display: 'table',
    width: 'auto',
    marginBottom: 30
  },
  tableRow: {
    flexDirection: 'row',
    borderBottom: '1 solid #eee'
  },
  tableHeader: {
    backgroundColor: '#f8fafc'
  },
  tableCell: {
    padding: 8,
    flex: 1
  },
  total: {
    marginTop: 30,
    textAlign: 'right',
    fontSize: 18,
    fontWeight: 'bold'
  }
});

const Invoice = ({ order }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.header}>
        <Text style={styles.title}>Invoice</Text>
        <Text>Order ID: #{order.id}</Text>
        <Text>Date: {new Date().toLocaleDateString()}</Text>
      </View>

      <View style={styles.orderInfo}>
        <Text>Customer: {order.customer.name}</Text>
        <Text>Email: {order.customer.email}</Text>
      </View>

      <View style={styles.table}>
        <View style={[styles.tableRow, styles.tableHeader]}>
          <Text style={styles.tableCell}>Item</Text>
          <Text style={styles.tableCell}>Quantity</Text>
          <Text style={styles.tableCell}>Price</Text>
          <Text style={styles.tableCell}>Total</Text>
        </View>

        {order.items.map(item => (
          <View key={item.id} style={styles.tableRow}>
            <Text style={styles.tableCell}>{item.title}</Text>
            <Text style={styles.tableCell}>{item.quantity}</Text>
            <Text style={styles.tableCell}>${item.price}</Text>
            <Text style={styles.tableCell}>
              ${(item.price * item.quantity).toFixed(2)}
            </Text>
          </View>
        ))}
      </View>

      <Text style={styles.total}>
        Total: ${order.total.toFixed(2)}
      </Text>
    </Page>
  </Document>
);

export default Invoice;