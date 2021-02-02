import React from "react";
import firstImg from "./../../assets/social/Vector-1.png";
import secondImg from "./../../assets/social/Vector.png";
import thirdImg from "./../../assets/social/Vector-2.png";
import forthImg from "./../../assets/social/Union.png";
function Section8() {
  return (
    <div
      style={{
        backgroundColor: "aliceblue",
        height: "50px",
        width: "100%",
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
      }}
    >
      <div
        style={{
          marginLeft: "30px",
        }}
      >
        <img src={firstImg} style={{marginRight:"20px"}}/>
        <img src={secondImg} style={{marginRight:"20px"}}/>
        <img src={thirdImg} style={{marginRight:"20px"}}/>
        <img src={forthImg} style={{marginRight:"20px"}}/>
      </div>
    </div>
  );
}

export default Section8;
