import React, { Component } from "react";

class Getuser extends Component {
  constructor() {
    super();

    this.state = {
      person: {},
      loading: true
    };
  }

  async componentDidMount() {
    const url = "https://api.randomuser.me/";
    const response = await fetch(url);
    const data = await response.json();

    this.setState({
      person: data.results[0],
      loading: false
    });

    console.log(data.results[0]);
  }

  render() {
    if (this.state.loading) {
      return <h2>Loading...</h2>;
    }

    return (
      <div className="container">
        <h1>User Details</h1>

        <img
          src={this.state.person.picture.large}
          alt="User"
        />

        <h2>
          {this.state.person.name.title}{" "}
          {this.state.person.name.first}
        </h2>
      </div>
    );
  }
}

export default Getuser;