import React, {useState, useEffect} from 'react';
// import {navbarItems} from './navbarItems';
import {Link} from 'react-router-dom';
import styles from './styles.module.css';

function NavBar() {
  const [click, setClick] = useState(false);
  // const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  // const showButton = () => {
  //   if (window.innerWidth <= 960) {
  //     setButton(false);
  //   } else {
  //     setButton(true);
  //   }
  // };

  useEffect(() => {
    // showButton();
  }, []);

  // window.addEventListener('resize', showButton);

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.navbarContainer}>
          <Link to="/" className={styles.navbarLogo} onClick={closeMobileMenu}>
            California Surf Fisher
            <i className={`${styles.faFish} fas fa-fish`} />
          </Link>
          <div className={styles.menuIcon} onClick={handleClick}>
            <i
              className={click ? `${styles.faTimes} fas fa-times` : `${styles.faBars} fas fa-bars`}
            />
          </div>
          <ul className={click ? styles.active : styles.navMenu}>
            <li className={styles.navItem}>
              <Link to="/" className={styles.navLinks} onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link to="/rigs" className={styles.navLinks} onClick={closeMobileMenu}>
                Rigs
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link to="/locations" className={styles.navLinks} onClick={closeMobileMenu}>
                Locations
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link to="/fish" className={styles.navLinks} onClick={closeMobileMenu}>
                Species Info
              </Link>
            </li>

            <li>
              <Link to="/signup" className={styles.navLinksMobile} onClick={closeMobileMenu}>
                Sign Up
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
