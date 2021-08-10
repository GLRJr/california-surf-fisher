import React from "react";
import FacebookIcon from "../FacebookIcon";
import InstagramIcon from "../InstagramIcon";
import style from "./styles.module.css";

function SocialMediaBar() {
  return (
    <div className={style.mainContainer}>
      <FacebookIcon />
      <InstagramIcon />
    </div>
  );
}

export default SocialMediaBar;
