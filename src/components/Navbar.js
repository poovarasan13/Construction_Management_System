import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../assests/style/Navbar.css';
import { useUser } from './UserContext';
import { useVendor } from './VendorContext';

function Navbar() {
  const [navBackground, setNavBackground] = useState(false);

  const { username } = useUser(); 
   const {fname }=useVendor();
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setNavBackground(true);
      } else {
        setNavBackground(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <nav
        className={`navbar navbar-expand-lg border border-1 border-dark fixed-top ${
          navBackground ? 'navbar-dark' : 'navbar-background'
        }`}
        style={{ transition: 'background-color 0.3s ease' }}
      >
        <div className="container-fluid">
          <button
            className="navbar-toggler bg-dark-subtle"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="navbar-brand mx-auto">
            <div className="row">
              <div className="col">
                <h3 className="mb-0 fw-bold text-light">Cresta</h3>
              </div>
            </div>
          </div>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto fw-bold gap-md-3">
              <li className="nav-item active">
                <Link to="/home" className="nav-link text-light">
                  Home
                </Link>
              </li>
              <li className="nav-item active">
                <Link to="/home" className="nav-link text-light">
                  Projects
                </Link>
              </li>
              {/* <li className="nav-item dropdown">
                <div
                  className="nav-link dropdown-toggle text-light"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Services
                </div>
                <ul className="dropdown-menu">
                  <li>
                    <Link to="/Architecture" className="dropdown-item text-dark">
                      Architecture
                    </Link>
                  </li>
                  <li>
                    <Link to="/home" className="dropdown-item text-dark">
                      Exterior Design
                    </Link>
                  </li>
                  <li>
                    <Link to="/home" className="dropdown-item text-dark">
                      Electrical Engineering
                    </Link>
                  </li>
                  <li>
                    <Link to="/water" className="dropdown-item text-dark">
                      Water Engineering
                    </Link>
                  </li>
                </ul>
              </li> */}
              <li>
                <Link to="/about" className="nav-link text-light">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="nav-link text-light">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/gpt" className="nav-link text-light">
                  Room GPT
                </Link>
              </li>
             
             <li>
             {username ? (
                <Link to="/account" className="nav-link text-light">
                  Profile
                </Link>
              ) : fname ? (
                <Link to="/vendorhome" className="nav-link text-light">
                  Profile
                </Link>
              ) : (
                <Link to="/login" className="nav-link text-light">
                  Login
                </Link>
              )}
             </li>
                           {/* {username ? (
                <Link to="/account" className="nav-link text-light">
                  Account
                </Link>
              ) : (
                <Link to="/login" className="nav-link text-light">
                  Login
                </Link>
              )} */}


                {/* <Link to="/vendorhome" className="nav-link text-light">
                  Account
                </Link>
               */}

            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;