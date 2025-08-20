import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import Search from './components/Search/Search';
import ProductList from './components/ProductList/ProductList';
import Cart from './components/Cart/Cart';
import WishList from './components/WishList/WishList';
import Auth from './components/Auth/Auth';
import Dashboard from './components/Dashboard/Dashboard';
import Profile from './components/Profile/Profile';
import Footer from './components/Footer/Footer';
import TopSeller from './components/TopSeller/TopSeller';
import products, { categories } from './data/products';
import { users } from './data/users';
import './styles/global.css';

const App = () => {
  const [user, setUser] = useState(null);
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const navigate = useNavigate();

  const handleLogin = (userData) => {
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));
    if (userData.role === 'admin') {
      navigate('/dashboard');
    } else {
      navigate('/');
    }
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('user');
    navigate('/login');
  };

  const handleUpdateProfile = (updatedData) => {
    setUser(prev => ({
      ...prev,
      ...updatedData
    }));
    localStorage.setItem('user', JSON.stringify({
      ...user,
      ...updatedData
    }));
  };

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const addToCart = (product) => {
    const existingItem = cart.find(item => item.id === product.id);
    if (existingItem) {
      setCart(cart.map(item => 
        item.id === product.id 
          ? {...item, quantity: item.quantity + 1}
          : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  const updateCartItemQuantity = (productId, newQuantity) => {
    setCart(cart.map(item => 
      item.id === productId 
        ? {...item, quantity: newQuantity}
        : item
    ));
  };

  const addToWishlist = (product) => {
    if (!wishlist.find(item => item.id === product.id)) {
      setWishlist([...wishlist, product]);
    }
  };

  const removeFromWishlist = (productId) => {
    setWishlist(wishlist.filter(item => item.id !== productId));
  };

  const filteredProducts = products.filter(product => {
    const searchLower = searchQuery.toLowerCase();
    const matchesSearch = 
        product.title.toLowerCase().includes(searchLower) ||
        product.description.toLowerCase().includes(searchLower) ||
        product.brand.toLowerCase().includes(searchLower);
    
    const matchesCategory = !selectedCategory || 
        product.category.toLowerCase() === selectedCategory.toLowerCase();
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="app">
      <Header 
        user={user}
        cartCount={cart.length}
        wishlistCount={wishlist.length}
        onLogout={handleLogout}
      />
      
      <main className="main-content">
        <Routes>
          <Route path="/" element={
            <>
              <Search
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
                categories={categories}
              />
              <ProductList
                products={filteredProducts}
                addToCart={addToCart}
                addToWishlist={addToWishlist}
              />
            </>
          } />
          <Route path="/login" element={
            user ? <Navigate to="/" /> : <Auth onLogin={handleLogin} />
          } />
          <Route path="/cart" element={
            <Cart 
              items={cart} 
              onRemove={removeFromCart}
              updateQuantity={updateCartItemQuantity}
            />
          } />
          <Route path="/wishlist" element={
            <WishList 
              wishlist={wishlist}
              removeFromWishlist={removeFromWishlist}
              addToCart={addToCart}
            />
          } />
          <Route path="/dashboard" element={
            user?.role === 'admin' 
              ? <Dashboard products={products} users={users} /> 
              : <Navigate to="/" />
          } />
          <Route 
            path="/profile" 
            element={
              user ? <Profile user={user} onUpdateProfile={handleUpdateProfile} /> : <Navigate to="/login" />
            } 
          />
          <Route path="/top" element={
            <TopSeller
              products={products}
              addToCart={addToCart}
              addToWishlist={addToWishlist}
            />
          } />
        </Routes>
      </main>

      <Footer />
    </div>
  );
};

export default App;