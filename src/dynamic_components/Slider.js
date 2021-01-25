import React, { Component } from "react";
import Card from "./Card";
import "./slider.scss";
import i1 from "./assets/game-2.jpg";
import i2 from "./assets/game-1.jpg";
import i3 from "./assets/game-3.jpg";
import i4 from "./assets/game-4.jpg";
import i5 from "./assets/game-5.jpg";
import TouchHandler from "./TouchHandler";

const IMG_DATA = [i1, i2, i3, i4, i5];
let lastPos = 0;

class Slider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentCardIndex: 1,
      currentCard_Width: 0,
      activeIndex: true,
      checked: true,
    };

    this.goToRight = this.goToRight.bind(this);
    this.goToLeft = this.goToLeft.bind(this);

    this.goToRightInfinite = this.goToRightInfinite.bind(this);
    this.goToLeftInfinite = this.goToLeftInfinite.bind(this);

    this.goRightFn = this.goRightFn.bind(this);
    this.goLeftFn = this.goLeftFn.bind(this);

    this.Indicator = this.Indicator.bind(this);
  }

  componentWillMount() {
    const cardWidth_Percent =
      window.innerWidth < styles.media.minWidth
        ? 100
        : (styles.media.maximumCardSize / window.screen.availWidth) * 100;

    this.setState({ currentCard_Width: cardWidth_Percent });
  }

  componentDidMount() {
    this.viewPort.style.width = `${this.state.currentCard_Width}vw`;
    const imgWidth_Pixels = this.cardContainer.children[0].getBoundingClientRect()
      .width;

    let firstCard_Clone = this.cardContainer.children[0].cloneNode(true);
    let lastCard_Clone = this.cardContainer.children[
      this.cardContainer.children.length - 1
    ].cloneNode(true);

    this.cardContainer.insertBefore(
      lastCard_Clone,
      this.cardContainer.children[0]
    );
    this.cardContainer.append(firstCard_Clone);

    this.cardContainer.style.transitionDuration = "0.0s";
    this.cardContainer.style.transform = `translate(-${
      this.state.currentCardIndex * imgWidth_Pixels
    }px)`;

    window.addEventListener("resize", () => {
      const cardWidth_Percent =
        window.innerWidth < styles.media.minWidth
          ? 100
          : (styles.media.maximumCardSize / window.screen.availWidth) * 100;

      for (let i = 0; i < this.cardContainer.children.length; i++) {
        this.cardContainer.children[i].style.width = `${cardWidth_Percent}vw`;
      }

      this.viewPort.style.width = `${cardWidth_Percent}vw`;

      const imgWidth_Pixels = this.cardContainer.children[0].getBoundingClientRect()
        .width;
      this.cardContainer.style.transitionDuration = "0.0s";
      this.cardContainer.style.transform = `translate(-${
        this.state.currentCardIndex * imgWidth_Pixels
      }px)`;
    });
  }

  goToRight = () => {
    if (this.state.currentCardIndex < this.cardContainer.children.length - 2) {
      let new_currentCardIndex = this.state.currentCardIndex + 1;

      const imgWidth_Pixels = this.cardContainer.children[0].getBoundingClientRect()
        .width;

      this.setState(
        { currentCardIndex: new_currentCardIndex, activeIndex: false },
        () => {
          this.cardContainer.style.transitionDuration = "0.5s";
          this.cardContainer.style.transform = `translate(-${
            imgWidth_Pixels * this.state.currentCardIndex
          }px)`;
        }
      );
    } else {
      return;
    }
  };

  goToLeft = () => {
    const { currentCardIndex } = this.state;
    if (currentCardIndex > 1) {
      let index = currentCardIndex - 1;

      const imgWidth_Pixels = this.cardContainer.children[0].getBoundingClientRect()
        .width;

      this.setState({ currentCardIndex: index, activeIndex: true }, () => {
        this.cardContainer.style.transitionDuration = "0.5s";
        this.cardContainer.style.transform = `translate(-${
          imgWidth_Pixels * this.state.currentCardIndex
        }px)`;
      });
    } else {
      return 0;
    }
  };

  goToRightInfinite = () => {
    if (this.state.currentCardIndex < this.cardContainer.children.length - 1) {
      let new_currentCardIndex = this.state.currentCardIndex + 1;
      const imgWidth_Pixels = this.cardContainer.children[0].getBoundingClientRect()
        .width;

      this.setState({ currentCardIndex: new_currentCardIndex }, () => {
        this.cardContainer.style.transitionDuration = "0.5s";
        this.cardContainer.style.transform = `translate(-${
          imgWidth_Pixels * this.state.currentCardIndex
        }px)`;

        if (
          this.state.currentCardIndex ===
          this.cardContainer.children.length - 1
        ) {
          setTimeout(() => {
            this.cardContainer.style.transitionDuration = "0.0s";
            this.cardContainer.style.transform = `translate(-${imgWidth_Pixels}px)`;

            this.setState({ currentCardIndex: 1 });
          }, 502);
        }
      });
    } else {
      return;
    }
  };

  goToLeftInfinite = () => {
    if (this.state.currentCardIndex > 0) {
      let new_currentCardIndex = this.state.currentCardIndex - 1;
      const imgWidth_Pixels = this.cardContainer.children[0].getBoundingClientRect()
        .width;

      this.setState({ currentCardIndex: new_currentCardIndex }, () => {
        this.cardContainer.style.transitionDuration = "0.5s";
        this.cardContainer.style.transform = `translate(-${
          imgWidth_Pixels * this.state.currentCardIndex
        }px)`;

        if (this.state.currentCardIndex === 0) {
          setTimeout(() => {
            this.cardContainer.style.transitionDuration = "0.0s";
            this.cardContainer.style.transform = `translate(-${
              imgWidth_Pixels * (this.cardContainer.children.length - 2)
            }px)`;

            this.setState({
              currentCardIndex: this.cardContainer.children.length - 2,
            });
          }, 502);
        }
      });
    } else {
      return;
    }
  };

  setChecked(e) {
    this.setState({ checked: e.target.checked });
  }

  goRightFn() {
    if (this.state.checked) {
      return this.goToRight();
    }

    return this.goToRightInfinite();
  }

  goLeftFn() {
    if (this.state.checked) {
      return this.goToLeft();
    }

    return this.goToLeftInfinite();
  }

  mouseSwipe = (e) => {
    e.persist();
    let type = e.type.toLowerCase();
    if (type === "dragstart") {
      lastPos = e.clientX;
    } else {
      if (lastPos === 0 || e.clientX === 0 || lastPos === e.clientX) {
        return;
      }

      e.clientX > lastPos ? this.goRightFn() : this.goLeftFn();
    }
  };

  Indicator(curIndex, index) {
    let nextIndicator = curIndex < index;
    const imgWidth_Pixels = this.cardContainer.children[0].getBoundingClientRect()
      .width;

    this.setState(
      {
        currentCardIndex: index + 1,
        activeIndex: nextIndicator,
      },
      () => {
        this.cardContainer.style.transitionDuration = "0.3s";
        this.cardContainer.style.transform = `translate(-${
          imgWidth_Pixels * this.state.currentCardIndex
        }px)`;

        if (this.state.activeIndex === this.cardContainer.children.length - 1) {
          this.activeIndex.style.transitionDuration = "0.0s";
        }
      }
    );
  }

  render() {
    TouchHandler.config({
      left: () => {
        this.goLeftFn();
      },
      right: () => {
        this.goRightFn();
      },
    });

    return (
      <div className="slide">
        <label className="switch__checkbox" htmlFor="checkbox">
          <input
            id="checkbox"
            className="checked"
            checked={this.state.checked}
            type="checkbox"
            onChange={(e) => this.setChecked(e)}
          />
          <div className="switcher round" />
        </label>

        <button
          className="slide__button slide__button--left"
          direction="left"
          onClick={() => this.goLeftFn()}
        >
          <span />
        </button>
        <button
          className="slide__button slide__button--right"
          direction="right"
          onClick={() => this.goRightFn()}
        >
          <span />
        </button>
        <div
          ref={(ref_id) => (this.viewPort = ref_id)}
          className="view-port"
          style={styles.viewPort}
        >
          <div
            {...TouchHandler.events}
            ref={(ref_id) => (this.cardContainer = ref_id)}
            className="card-container"
            style={styles.cardContainer}
            onDragStart={(e) => this.mouseSwipe(e)}
            onDragEnd={(e) => this.mouseSwipe(e)}
          >
            <Card
              card_number={i1}
              resize_width={this.state.currentCard_Width}
            />
            <Card
              card_number={i2}
              resize_width={this.state.currentCard_Width}
            />
            <Card
              card_number={i3}
              resize_width={this.state.currentCard_Width}
            />
            <Card
              card_number={i4}
              resize_width={this.state.currentCard_Width}
            />
            <Card
              card_number={i5}
              resize_width={this.state.currentCard_Width}
            />
          </div>
        </div>

        <div className="slide__dots">
          <Indicator
            current={this.state.currentCardIndex}
            images={this.state.images}
            changeSlide={this.Indicator}
          />
        </div>
      </div>
    );
  }
}

class Indicator extends Component {
  render() {
    let current = this.props.current;
    let images = IMG_DATA.map((element, index) => {
      let toggle = index + 1 === current ? "active" : "";
      return (
        <li key={index}>
          <button
            className={toggle}
            onClick={() => this.props.changeSlide(current, index)}
          ></button>
        </li>
      );
    });

    return <ul>{images}</ul>;
  }
}

const styles = {
  viewPort: {
    //position: "absolute", //important!
    //top: "50%",
    //left: "50%",
    //transport: "translate(-50%, -50%)",
    //height: "auto",
    //backgroundColor: "red",
    overflow: "hidden",
    //margin: "-150px",
    // objectFit: "cover",
    // backgroundSize: "cover",
    //minHeight: "100vh",
    height: "100vh", // problem with ghosting
    width: "100vh",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },

  cardContainer: {
    display: "flex",
    flexDirection: "row",
    width: "fit-content",
  },
  media: {
    maximumCardSize: 1920,
    minWidth: 768,
  },
};

export default Slider;
