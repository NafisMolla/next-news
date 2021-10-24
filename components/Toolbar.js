import React from "react";
import styles from "../styles/Toolbar.module.css";

import { useRouter } from "next/router";

const Toolbar = () => {
  const router = useRouter();

  return (
    <div className={styles.main}>
      <div onClick={() => router.push("/")}>Home</div>

      <div onClick={() => router.push("/quote")}>Quote</div>

      <div onClick={() => router.push("/news/1")}>News</div>
    </div>
  );
};

export default Toolbar;
