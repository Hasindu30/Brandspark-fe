import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';
import logo from '../../assets/logo2.png';
import loginImage from '../../assets/login.png'; // Default login image
import menures from '../../assets/menures.png';

const Navbar = () => {
    const [mobileMenu, setMobileMenu] = useState(false);
    const [dropdownVisible, setDropdownVisible] = useState(false);
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        // Check if a token is present
        const token = localStorage.getItem('token');

        if (token) {
            // Fetch user info if token exists
            fetch('/api/me', {
                headers: {
                    'x-auth-token': token
                }
            })
                .then(response => response.json())
                .then(data => {
                    // Check if data is valid and set user
                    if (data && data.firstName && data.lastName && data.email) {
                        setUser(data);
                    } else {
                        throw new Error('Invalid user data');
                    }
                })
                .catch(err => {
                    console.error('Error fetching user data:', err);
                    localStorage.removeItem('token'); // Clean up if there's an error
                    setUser(null);
                });
        } else {
            setUser(null);
        }
    }, []);

    const toggleMenu = () => {
        setMobileMenu(!mobileMenu);
    };

    const toggleDropdown = () => {
        setDropdownVisible(!dropdownVisible);
    };

    const handleLogout = () => {
        localStorage.removeItem('token');
        setUser(null);
        setDropdownVisible(false);
        navigate('/login');
    };

    return (
        <nav className='navbar'>
            <Link to='/'>
                <img src={logo} alt="Logo" className='logo' />
            </Link>

            <ul className='navbar-mid'>
                <li><Link style={{ textDecoration: 'none', fontFamily: 'inherit', color: 'inherit' }} to='/'>Home</Link></li>
                <li><Link style={{ textDecoration: 'none', fontFamily: 'inherit', color: 'inherit' }} to='/Brandname'>Brand Name</Link></li>
                <li><Link style={{ textDecoration: 'none', fontFamily: 'inherit', color: 'inherit' }} to='/Logomaker'>Logo Maker</Link></li>
                <li><Link style={{ textDecoration: 'none', fontFamily: 'inherit', color: 'inherit' }} to='/BrandKit'>Brand Kit</Link></li>
                <li><Link style={{ textDecoration: 'none', fontFamily: 'inherit', color: 'inherit' }} to='/Contact'>Contact</Link></li>
                <li><Link style={{ textDecoration: 'none', fontFamily: 'inherit', color: 'inherit' }} to='/Experts'>Experts</Link></li>
            </ul>

            <ul className='navbar-right'>
                
                
                    
                        <li><Link style={{ textDecoration: 'none', fontFamily: 'inherit', color: 'inherit' }} to='/Login'>Login</Link></li>
                        <li className='btnnav'><Link style={{ textDecoration: 'none', fontFamily: 'inherit', color: 'inherit' }} to='/Signup'>Signup</Link></li>
                        <li className='user-dropdown'>
                    
                    
                </li>
                
                
            </ul>
            <img
                        src={loginImage} // Display login image all the time
                        alt='User'
                        className='login-img'
                        
                    />
                    

            <ul className={mobileMenu ? 'response' : 'hide-mobile-menu'}>
                <li><Link style={{ textDecoration: 'none', fontFamily: 'inherit', color: 'inherit' }} to='/'>Home</Link></li>
                <li><Link style={{ textDecoration: 'none', fontFamily: 'inherit', color: 'inherit' }} to='/Brandname'>Brand name</Link></li>
                <li><Link style={{ textDecoration: 'none', fontFamily: 'inherit', color: 'inherit' }} to='/Logomaker'>Logo maker</Link></li>
                <li><Link style={{ textDecoration: 'none', fontFamily: 'inherit', color: 'inherit' }} to='/BrandKit'>Brand Kit</Link></li>
                <li><Link style={{ textDecoration: 'none', fontFamily: 'inherit', color: 'inherit' }} to='/Contact'>Contact</Link></li>
                <li><Link style={{ textDecoration: 'none', fontFamily: 'inherit', color: 'inherit' }} to='/Experts'>Experts</Link></li>
                <li><Link style={{ textDecoration: 'none', fontFamily: 'inherit', color: 'inherit' }} to='/Login'>Login</Link></li>
                <li><Link style={{ textDecoration: 'none', fontFamily: 'inherit', color: 'inherit' }} to='/Signup'>Signup</Link></li>
            </ul>

            <img src={menures} alt="Menu" className='menures' onClick={toggleMenu} />
        </nav>
    );
};

export default Navbar;