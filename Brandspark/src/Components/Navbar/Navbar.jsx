import React, { useState, useEffect } from 'react';
import './Navbar.css';
import logo from '../../assets/logo2.png';
import login from '../../assets/login.png';
import menures from '../../assets/menures.png';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  const toggleMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(null);
    setDropdownVisible(false);
    navigate('/login'); // Redirect to login page after logout
  };

  return (
    <nav className='navbar'>
      <Link to='/'>
        <img src={logo} alt="" className='logo' />
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
        {user ? (
          <li className='user-dropdown'>
            <img
              src={login} // Use user.image if available
              alt='User'
              className='login-img'
              onClick={toggleDropdown}
            />
            {dropdownVisible && (
              <div className='dropdown-menu'>
                <p>{user.firstName} {user.lastName}</p>
                <button onClick={handleLogout}>Logout</button>
              </div>
            )}
          </li>
        ) : (
          <>
            <li><Link style={{ textDecoration: 'none', fontFamily: 'inherit', color: 'inherit' }} to='/Login'>Login</Link></li>
            <li className='btnnav'><Link style={{ textDecoration: 'none', fontFamily: 'inherit', color: 'inherit' }} to='/Signup'>Signup</Link></li>
          </>
        )}
      </ul>

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

      <img src={menures} alt="" className='menures' onClick={toggleMenu} />
    </nav>
  );
};

export default Navbar;
