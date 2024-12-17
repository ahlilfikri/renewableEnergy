import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaRegUser } from "react-icons/fa";
import './NavBar.css';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const handleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (screenWidth > 600) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  }, [screenWidth]);

  return (
    <nav className="navbar">
      <div className="container">
        <h2>Edu Energy</h2>
        {screenWidth < 600 && (
          <button className="menu-drop-down" onClick={handleIsOpen}>
            =
          </button>
        )}
        {isOpen && (
          <div className="nav-wrapper">
            <ul className="nav-links">
              <li>
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="nav-link" to="/monitoring">
                  Monitoring
                </Link>
              </li>
              <li>
                <Link className="nav-link" to="/count">
                  Hitung Energi
                </Link>
              </li>
              <li>
                <Link className="nav-link" to="/#contact">
                  Kontak
                </Link>
              </li>
            </ul>
            <Link className="nav-link" to="/signin">
              <div className="account">
              <FaRegUser />
              <p className="">
                  User
                </p>
              </div>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
