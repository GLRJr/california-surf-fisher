import React from "react";
import { navbarItems } from "./navbarItems";
import style from "./styles.module.css";

function NavBar() {
  return (
    <div className={style.navBar}>
      <nav className={style.navItems}>
        {/* <div className={style.logoContainer}>
          <img className={style.logo} src={logoImg} alt="surf-logo" />
        </div> */}
        <div className={style.title}>California Surf Fishing</div>

        <ul>
          {navbarItems.map((item, index) => {
            return (
              <li key={index} className={item.cName} href={item.url}>
                {item.title}
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
