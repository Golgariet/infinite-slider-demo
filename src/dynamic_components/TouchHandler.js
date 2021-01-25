let TouchHandler = {
  xDown: null,
  yDown: null,
};

TouchHandler.configuration = {};

TouchHandler.config = (config) => {
  const x = ["right", "left"];
  for (let choice of x) {
    if (config.hasOwnProperty(choice)) {
      TouchHandler.configuration[choice] = config[choice];
    }
  }
};

TouchHandler.events = {
  onTouchStart: (e) => {
    TouchHandler.xDown = e.touches[0].clientX;
    TouchHandler.yDown = e.touches[0].clientY;
  },
  onTouchMove: (e) => {
    if (TouchHandler.xDown === null || TouchHandler.yDown === null) {
      return;
    }

    let xUp = e.touches[0].clientX;
    let yUp = e.touches[0].clientY;

    let xDiff = TouchHandler.xDown - xUp;
    let yDiff = TouchHandler.yDown - yUp;

    if (Math.abs(xDiff) > Math.abs(yDiff)) {
      if (xDiff > 0) {
        if (TouchHandler.configuration.hasOwnProperty("left")) {
          TouchHandler.configuration.left();
        }
      } else {
        if (TouchHandler.configuration.hasOwnProperty("right")) {
          TouchHandler.configuration.right();
        }
      }
    }
    TouchHandler.xDown = null;
    TouchHandler.yDown = null;
  },
};

export default TouchHandler;
