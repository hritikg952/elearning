import React from "react";
import styles from "./section7.module.css";
import firstImg from "./../../assets/q (26).png";
import secondImg from "./../../assets/q (23).png";
import thirdImg from "./../../assets/q (20).png";
function Section7() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.points}>
          <div>
            <img src={firstImg} />
            <p>Hands-on Project</p>
          </div>
          <div>
            <img src={secondImg} />
            <p>Support teams across the world</p>
          </div>
          <div>
            <img src={thirdImg} />
            <p>Safe & Secure online payment</p>
          </div>
        </div>

        <div className={styles.footer}>
          <h1>elearning</h1>
          <div className={styles.links}>
            <div className={styles.list}>
              <h4>WHO ARE WE</h4>
              <ul>
                <li>About</li>
                <li>Team</li>
                <li>With Us</li>
              </ul>
            </div>
            <div className={styles.list}>
              <h4>ELEARNING</h4>
              <ul>
                <li>About</li>
                <li>Leadership</li>
                <li>Career</li>
                <li>Catalogs</li>
                <li>About</li>
                <li>Leadership</li>
                <li>Career</li>
                <li>Catalogs</li>
                <li>About</li>
                <li>Leadership</li>
                <li>Career</li>
                <li>Catalogs</li>
              </ul>
            </div>
            <div className={styles.list}>
              <h4>COMMUNITY</h4>
              <ul>
                <li>Learners</li>
                <li>Partners</li>
                <li>Developers</li>
                <li>Beta Tester</li>
              </ul>
            </div>
            <div className={styles.list}>
              <h4>ELEARNING</h4>
              <ul>
                <li>About</li>
                <li>Leadership</li>
                <li>Career</li>
                <li>Catalogs</li>
                <li>About</li>
                <li>Leadership</li>
                <li>Career</li>
                <li>Catalogs</li>
                <li>About</li>
                <li>Leadership</li>
                <li>Career</li>
                <li>Catalogs</li>
              </ul>
            </div>
            <div className={styles.list}>
              <h4>WHO ARE WE</h4>
              <ul>
                <li>About</li>
                <li>Team</li>
                <li>With Us</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section7;
