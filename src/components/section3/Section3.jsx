import React from "react";
import styles from "./section3.module.css";
import background from "./../../assets/Group931.png";
import firstImg from "./../../assets/Rectangle 236.png";
import secondImg from "./../../assets/Rectangle 233.png";
import thirdImg from "./../../assets/Rectangle -1.png";
import forthImg from "./../../assets/Rectangle -2.png";
function Section3() {
  return (
    <div className={styles.container}>
      <img src={background} className={styles.backgroundImg} />
      <div className={styles.content}>
        <div className={`${styles.card}`}>
          <img src={firstImg} />
          <div>
            <h1>Learn from leading universities and companies</h1>
            <p>
              Start streaming on-demand video lectures today from top
              instructors in subjects like business, computer science, data
              science, language learning, & more.
            </p>
            <button>Explore</button>
          </div>
        </div>
        <div
          style={{ flexDirection: "row-reverse" }}
          className={`${styles.card}`}
        >
          <img src={secondImg} />
          <div
            style={{
              textAlign: "left",
              width: "400px",
            }}
          >
            <h1>Find flexible, affordable options</h1>
            <p>
              Choose from many options including free courses and university
              degrees at a breakthrough price. Learn at your own pace, 100%
              online.
            </p>
            <button>Explore</button>
          </div>
        </div>
        <div className={`${styles.card}`}>
          <img src={thirdImg} />
          <div>
            <h1>Master skills with in-depth learning</h1>
            <p>
              Apply what you learn with self-paced quizzes and hands-on
              projects. Get feedback from a global community of learners
            </p>
            <button>Explore</button>
          </div>
        </div>
        <div
          style={{ flexDirection: "row-reverse" }}
          className={`${styles.card}`}
        >
          <img src={forthImg} />
          <div
            style={{
              textAlign: "left",
              width: "400px",
            }}
          >
            <h1>Earn industry-recognized credentials</h1>
            <p>
              Demonstrate your new skills by sharing your Course Certificate,
              Professional Certificate, MasterTrack™ Certificate, or diploma
              with your network.
            </p>
            <button>Explore</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section3;
