import React from "react";
import "./slider.scss";

var data = [
  { id: 1, itemNumber: "Item 1", text: "Uno" },
  { id: 2, itemNumber: "Item 2", text: "Dos" },
  { id: 3, itemNumber: "Item 3", text: "Tres" },
  { id: 4, itemNumber: "Item 4", text: "Cuatro" },
  { id: 5, itemNumber: "Item 5", text: "Cinco" },
];

function Card(props) {
  return (
    <div
      style={{
        ...styles.card,
        width: `${props.resize_width}vw`,
      }}
    >
      <div style={styles.caption}>
        <h2 style={styles.text_main}>Genshin</h2>
        {/* <p style={styles.text_sub}>awdawdawd</p> */}
        {data.map(function (data) {
          return <p style={styles.text_sub}>{props.waifu_name}</p>;
        })}

        <img alt="images" style={styles.image} src={props.card_number}></img>
      </div>
    </div>
  );
}

const styles = {
  primary: {},

  text_main: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(20%, 30%)",
    zIndex: "99999",
    height: "50%",
    width: "50%",
    fontSize: "6vw",
  },

  text_sub: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(26%, 50%)",
    zIndex: "99999",
    height: "50%",
    width: "50%",
    fontSize: "3vw",
  },

  card: {
    height: "auto",
    boxSizing: "border-box",
    backgroundSize: "cover",
    backgroundPosition: "center",
    userSelect: "none",

    // userDrag: "none",
    // userSelect: "none",
    // MozUserSelect: "none",
    // WebkitUserSelect: "none",
    // WebkitUserDrag: "none",
    // msUserSelect: "none",
  },

  image: {
    width: "100%",
    height: "auto",
    position: "relative",
    transform: "translate(50%, 50%)",

    objectFit: "cover",
    userSelect: "none",
    userDrag: "none",

    // WebkitUserDrag: "none",
  },

  caption: {
    transform: "translate(-50%, -50%)",
    userSelect: "none",
  },
};

export default React.memo(Card);
