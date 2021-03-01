import React from "react";
import "./slider.scss";

function Card(props) {
  return (
    <div
      style={{
        ...styles.card,
        width: `${props.resize_width}vw`,
      }}
    >
      <div style={styles.caption}>
        <img
          draggable="false"
          alt="images"
          style={styles.image}
          src={props.card_number}
        ></img>
      </div>
    </div>
  );
}

const styles = {
  text_main: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(20%, 35%)",
    zIndex: "99999",
    height: "50%",
    width: "50%",
    fontSize: "4vw",
    textTransform: "uppercase",
    letterSpacing: "2.5px",
    textAlign: "justify",
  },

  text_sub: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(66%, 70%)",
    zIndex: "99999",
    height: "50%",
    width: "50%",
    fontSize: "3vw",
    textTransform: "uppercase",
    letterSpacing: "2.5px",
    WebkitFontDmoothing: "antialiased",
    MozOsxFontSmoothing: "grayscale",
    textRendering: "optimizeLegibility",
  },

  card: {
    cursor: "grab",
    height: "auto",
    boxSizing: "border-box",
    backgroundSize: "cover",
    backgroundPosition: "center",
    userSelect: "none",
  },

  image: {
    width: "100%",
    height: "auto",
    position: "relative",
    transform: "translate(50%, 50%)",

    objectFit: "cover",
    userSelect: "none",
    userDrag: "none",
  },

  caption: {
    transform: "translate(-50%, -50%)",
    userSelect: "none",
  },
};

export default React.memo(Card);
