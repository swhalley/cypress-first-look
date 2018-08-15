import React, { Component } from "react";

export default class Clicky extends Component {
  state = { count: 0, width: 0, height: 0 };

  componentDidMount() {
    window.addEventListener("resize", this.updateDimensions.bind(this));

    this.updateDimensions();
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions.bind(this));
  }

  render() {
    let classes = ["clicky"];
    if (this.state.width < 1080) classes.push("toNarrow");
    if (this.state.height < 768) classes.push("toShort");

    return (
      <React.Fragment>
        <button
          className={classes.join(" ")}
          onClick={() => this.setState({ count: this.state.count + 1 })}
        >
          Click Me
        </button>
        <span className="counter">{this.state.count}</span>
      </React.Fragment>
    );
  }

  updateDimensions() {
    let w = Math.max(
      document.documentElement.clientWidth,
      window.innerWidth || 0
    );
    let h = Math.max(
      document.documentElement.clientHeight,
      window.innerHeight || 0
    );

    this.setState({
      width: w,
      height: h
    });
  }
}
