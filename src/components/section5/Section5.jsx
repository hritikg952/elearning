import React from "react";
import styles from "./section5.module.css";

import peopleImg from "./../../assets/people-section.png";
function Section5() {
  return (
    <div className={styles.container}>
      <h1>Our Vision</h1>
      <p>
        87% of people learning for professional development report career
        benefits like getting a promotion, a raise, or starting a new career
      </p>
      <img src={peopleImg} />
    </div>
  );
}

export default Section5;
