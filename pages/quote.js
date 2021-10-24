import React from "react";
import Toolbar from "../components/Toolbar";
import styles from "../styles/Quote.module.css";

const quote = ({ data, quote }) => {
  return (
    <div>
      <Toolbar />
      <div className={"grid justify-items-center "}>
        <div className={styles.image_container}>
          <img className={styles.image} src={data.urls.regular} />
        </div>

        <h1 className={"text-xl font-extralight p-5 "}>{quote[0].q}</h1>
        <h3 className={"text-lg font-light "}>- {quote[0].a}</h3>
      </div>
    </div>
  );
};

export const getServerSideProps = async (pageContext) => {
  const res = await fetch("http://localhost:3000/api/image");
  const data = await res.json();

  const q = await fetch(
    "https://zenquotes.io/api/random/1a960aa8b952d1f749263c651e4d8a257601ac43"
  );
  const quote = await q.json();

  return {
    props: {
      data,
      quote,
    },
  };
};

export default quote;
