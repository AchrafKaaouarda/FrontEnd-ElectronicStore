import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaShoppingCart, FaHeart, FaUser, FaSignOutAlt } from 'react-icons/fa';
import './Header.css';

const Header = ({ user, cartCount, wishlistCount, onLogout }) => {
    const navigate = useNavigate();

    return (
        <header className="header">
            <div className="header-logo">
                <Link to="/">
                    <h1>TechStore</h1>
                </Link>
            </div>
            <nav className="header-nav">
                <div className="nav-links">
                    <Link to="/" className="nav-link">Home</Link>
                    <Link to="/top" className="nav-link">Top seller</Link>
                </div>
                <div className="nav-actions">
                    <Link to="/wishlist" className="icon-button">
                        <FaHeart />
                        {wishlistCount > 0 && <span className="badge">{wishlistCount}</span>}
                    </Link>
                    <Link to="/cart" className="icon-button">
                        <FaShoppingCart />
                        {cartCount > 0 && <span className="badge">{cartCount}</span>}
                    </Link>
                    {user ? (
                        <div className="user-menu">
                            <button className="user-button">
                                <FaUser />
                                <span>{user.name}</span>
                            </button>
                            <div className="dropdown-menu">
                                {user.role === 'admin' && (
                                    <Link to="/dashboard" className="dropdown-item">
                                        Dashboard
                                    </Link>
                                )}
                                <Link to="/profile" className="dropdown-item">
                                    Profile
                                </Link>
                                <button onClick={onLogout} className="dropdown-item">
                                    <FaSignOutAlt /> Logout
                                </button>
                            </div>
                        </div>
                    ) : (
                        <Link to="/login" className="login-button">
                            <FaUser /> Login
                        </Link>
                    )}
                </div>
            </nav>
        </header>
    );
};

export default Header;