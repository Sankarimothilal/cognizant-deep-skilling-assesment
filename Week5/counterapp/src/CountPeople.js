import React, { Component } from "react";

class CountPeople extends Component {
  constructor() {
    super();

    this.state = {
      entrycount: 0,
      exitcount: 0
    };
  }

  updateEntry = () => {
    this.setState((prevState) => {
      return {
        entrycount: prevState.entrycount + 1
      };
    });
  };

  updateExit = () => {
    this.setState((prevState) => {
      return {
        exitcount: prevState.exitcount + 1
      };
    });
  };

  render() {
    return (
      <div className="container">
        <h1>Mall Counter</h1>

        <h2>People Entered : {this.state.entrycount}</h2>

        <button onClick={this.updateEntry}>
          Login
        </button>

        <br /><br />

        <h2>People Exited : {this.state.exitcount}</h2>

        <button onClick={this.updateExit}>
          Exit
        </button>
      </div>
    );
  }
}

export default CountPeople;