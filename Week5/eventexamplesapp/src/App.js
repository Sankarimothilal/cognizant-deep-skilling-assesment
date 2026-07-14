import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      count: 0,
      amount: "",
      currency: ""
    };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
    alert("Hello! Member");
  };

  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  sayWelcome = (msg) => {
    alert(msg);
  };

  onPress = () => {
    alert("I was clicked");
  };

  handleAmount = (event) => {
    this.setState({ amount: event.target.value });
  };

  handleCurrency = (event) => {
    this.setState({ currency: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const euro = parseFloat(this.state.amount) * 80;

    alert(
      "Converting to Euro Amount is " + euro
    );
  };

  render() {
    return (
      <div className="App">

        <h3>{this.state.count}</h3>

        <button onClick={this.increment}>
          Increment
        </button>

        <br />

        <button onClick={this.decrement}>
          Decrement
        </button>

        <br />

        <button
          onClick={() => this.sayWelcome("welcome")}
        >
          Say welcome
        </button>

        <br />

        <button onClick={this.onPress}>
          Click on me
        </button>

        <br />
        <br />

        <h1 style={{ color: "green" }}>
          Currency Convertor!!!
        </h1>

        <form onSubmit={this.handleSubmit}>

          <label>Amount:</label>

          <input
            type="text"
            value={this.state.amount}
            onChange={this.handleAmount}
          />

          <br />
          <br />

          <label>Currency:</label>

          <input
            type="text"
            value={this.state.currency}
            onChange={this.handleCurrency}
          />

          <br />
          <br />

          <button type="submit">
            Submit
          </button>

        </form>

      </div>
    );
  }
}

export default App;