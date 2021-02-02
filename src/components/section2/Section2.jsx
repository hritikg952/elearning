import React from "react";
import styles from "./section2.module.css";
import firstImg from "./../../assets/Rectangle 223.png";
import secondImg from "./../../assets/Rectangle 224.png";
import thirdImg from "./../../assets/Group 930.png";
function Section2() {
  return (
    <div className={styles.container}>
      <h1>
        Learn from more than{" "}
        <span style={{ color: "rgb(167, 26, 26)" }}>
          160 member universities
        </span>{" "}
      </h1>
      <h3>Achieve your goals with elearning</h3>
      <h2>Why elearning</h2>

      <div className={styles.cardContainer}>
        <div className={`${styles.card} ${styles.firstCard}`}>
          <img src={firstImg} />
          <p>Top Quality</p>
        </div>
        <div className={`${styles.card} ${styles.secondCard}`}>
          <img src={secondImg} />
          <p>Accessible</p>
        </div>
        <div className={`${styles.card} ${styles.thirdCard}`}>
          <img src={thirdImg} />
          <p>Applied Learning</p>
        </div>
      </div>
    </div>
  );
}

export default Section2;
