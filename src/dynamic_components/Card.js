import React from "react";
import "./slider.scss";

// var data = [
//   { id: 1, itemNumber: "Item 1", text: "Uno" },
//   { id: 2, itemNumber: "Item 2", text: "Dos" },
//   { id: 3, itemNumber: "Item 3", text: "Tres" },
//   { id: 4, itemNumber: "Item 4", text: "Cuatro" },
//   { id: 5, itemNumber: "Item 5", text: "Cinco" },
// ];

function Card(props) {
  return (
    <div
      style={{
        ...styles.card,
        width: `${props.resize_width}vw`,
      }}
    >
      <div style={styles.caption}>
        <p style={styles.text_main}>Welcome:</p>
        {/* <p style={styles.text_sub}>{props.city_name}</p> */}
        {/* {data.map(function (data) {
          return <h2 style={styles.text_sub}>{props.city_name}</h2>;
        })} */}

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

// 1) draggable="false" , draggable="true" - DONE
// 2) Text Design
// 3) bug fixes
// 4) Webpack and clean React app
// 5) labels on buttons
// 6) BEM Nesting

// Even the slightest 1mm drag changes the active image. Consider preventing such behaviour.

// Buttons and other elements are not accessible, they don’t have any labels for people who don’t see well.

// Consider splitting your logic, making it more granular.

// You use BEM, use its benefits in SCSS, not nesting tags themselves.

// Redundant arrow functions in handlers (e) => do(e)
