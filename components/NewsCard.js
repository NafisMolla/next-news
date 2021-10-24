import React from "react";
import styles from "../styles/NewsCard.module.css";

const NewsCard = ({ title, desc, imgURL, url }) => {
  return (
    <div className={styles.main}>
      <div className={`${styles.post}`}>
        <h1>{title}</h1>
        <img onClick={() => (window.location.href = url)} src={imgURL} />
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default NewsCard;
