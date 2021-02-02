import React from "react";
import styles from "./section1.module.css";

//image imports
import searchIcon from "./../../assets/icon-search.png";
import searchIconWhite from "./../../assets/icon-search-1.png";
import student from "./../../assets/Student (23).png";

function Section1() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.firstDiv}>
          <h1>
            <span style={{ color: " rgb(48, 48, 80)" }}>e</span>learning
          </h1>
          <a href="#">For Students</a>
          <a href="#">For Business</a>
        </div>

        <div className={styles.secondDiv}>
          <a href="#">Login</a>
          <button className={styles.getStartedButton}>Get Started</button>
          <button className={styles.searchButton}>
            <img src={searchIcon} />
          </button>
        </div>
      </header>

      <div className={styles.content}>
        <div className={styles.contentFirstDiv}>
          <h1>
            World-class
            <br /> learning for
            <br /> anyone, anywhere
          </h1>
          <p>
            Build skills with courses, certificates, and degrees
            <br /> online from world-class universities and companies.
          </p>
          <div className={styles.form}>
            <input placeholder="Enter your Email address" />
            <button className={styles.formButton}>
              <img src={searchIconWhite} />
            </button>
          </div>
        </div>
        <img src={student} className={styles.contentImage} />
      </div>
    </div>
  );
}

export default Section1;
