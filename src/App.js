import React, { Component } from "react";
//import SPA from "./static_component/SPA";
import Slider from "./dynamic_components/Slider";

class App extends Component {
  render() {
    return (
      <>
        {/* <SPA /> */}
        <Slider />
      </>
    );
  }
}

export default App;
