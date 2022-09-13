import React, { Component } from "react";

class Watch extends Component {
  constructor(props) {
    super(props);
    this.title = this.props.title;
    this.zone = this.props.zone;
    this.id = this.props.id;
    this.interval = null;
    this.deg = 6; // градус поворота стрелок
    this.state = this.getTimeZone(); // высчитываем время
    this.onDelete = this.props.onDelete; // функция удаления блока часов
  }

  getTimeZone(zone) {
    const day = new Date();
    const hours = (day.getUTCHours() + +zone) * 30;
    const minutes = day.getUTCMinutes() * this.deg;
    console.log(minutes);
    const seconds = day.getUTCSeconds() * this.deg;
    const minuts = minutes / 12;
    return { hours, minutes, minuts, seconds };
  }

  componentDidMount() {
    this.interval = setInterval(
      () => this.setState(this.getTimeZone(this.zone)),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { hours, minutes, minuts, seconds } = this.state;
    return (
      <div className="clock">
        <button className="clock__btn" onClick={() => this.onDelete(this.id)}>
          X
        </button>
        <h2 className="clock__title">{this.title}</h2>
        <div className="clock__dial">
          <div className="clock__hour">
            <div
              className="hours"
              style={{ transform: `rotateZ(${hours + minuts}deg)` }}
            ></div>
          </div>
          <div className="clock__minute">
            <div
              className="minutes"
              style={{ transform: `rotateZ(${minutes}deg)` }}
            ></div>
          </div>
          <div className="clock__second">
            <div
              className="seconds"
              style={{ transform: `rotateZ(${seconds}deg)` }}
            ></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Watch;
