import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
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

    // Clean up listener on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Dependency array kosong, hanya dijalankan sekali saat mount

  useEffect(() => {
    if (screenWidth > 600) {
      setIsOpen(true); // Navbar selalu terbuka di layar besar
    } else {
      setIsOpen(false); // Navbar tersembunyi di layar kecil
    }
  }, [screenWidth]); // Update ketika ukuran layar berubah

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
          <ul className="nav-links">
            <li>
              <Link className="nav-link" to="aboutMe" smooth={true} duration={500}>
                Home
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="video" smooth={true} duration={500}>
                Video
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="experience" smooth={true} duration={500}>
                Experience
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="contact" smooth={true} duration={500}>
                Contact
              </Link>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
