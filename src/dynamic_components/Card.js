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

      {/* <button className="btn" onBoard={props.btn}>
        <span className="btn__visible">{props.text}</span>
        <span className="btn__invisible">{props.slogan}</span>
      </button> */}
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
    //top: "50%",
    //left: "0%",
    transform: "translate(50%, 50%)",
    //backgroundImage: "linear-gradient(to right bottom, #4880EC, #019CAD)",
    //alignItems: "center",
    // justifyContent: "center",
    objectFit: "cover",
    // backgroundSize: "cover",
    // backgroundPosition: "center",
    //maxWidth: "100%",
    //maxHeight: "100%",
    userSelect: "none",
    userDrag: "none",
  },

  caption: {
    //position: "absolute",
    //width: "100%",
    //height: "auto",
    // zIndex: "1000",
    //top: "-50%",
    //left: "-50%",
    transform: "translate(-50%, -50%)",
    userSelect: "none",
  },
};

export default React.memo(Card);
