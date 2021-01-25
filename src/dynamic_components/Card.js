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
        <img alt="images" style={styles.image} src={props.card_number}></img>
      </div>


    </div>
  );
}

const styles = {
  card: {
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
