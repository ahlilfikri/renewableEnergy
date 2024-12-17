import {useState,useEffect} from 'react';
import { Link } from 'react-scroll';
import './NavBar.css';

const NavBar = () => {
    const [isopen, setIsOpen] = useState(true);
    
    const handleIsOpen = () => {
        setIsOpen(!isopen)
    }

    useEffect(() => {
        const handleResize = () => {
          const screenWidth = window.innerWidth;

          if (screenWidth > 600) {
            console.log("ini > 600",isopen)
            setIsOpen(true);
          } else {
            console.log("ini < 600",isopen)
            setIsOpen(false);
          }
        };
        window.addEventListener('resize', handleResize);

        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, [isopen]);
    

    return (
        <nav className="navbar">
            <div className="container">
                <h2>Muhamad Ahlil Fikri</h2>
                {(window.innerWidth < 600) &&(
                     <button className="menu-drop-down" onClick={handleIsOpen}>=</button>
                     )
                }
                {isopen && (
                    <ul className="nav-links">
                        <li>
                          <Link className="nav-link" to="aboutMe" smooth={true} duration={500}>About-Me</Link>
                        </li>
                        <li>
                          <Link className="nav-link" to="video" smooth={true} duration={500}>Video</Link>
                        </li>
                        <li>
                          <Link className="nav-link" to="experience" smooth={true} duration={500}>Experience</Link>
                        </li>
                        <li>
                          <Link className="nav-link" to="contact" smooth={true} duration={500}>Contact</Link>
                        </li>
                    </ul>
                    )
                }
            </div>
        </nav>
    );
};

export default NavBar;
