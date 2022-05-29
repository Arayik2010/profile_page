import React, { Component } from "react";
import axios from "axios";

export default class Music extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => this.setState({ data: res.data }));
  }

  render() {
    return (
      <div>
        {this.state.data.map((e) => {
          return (
            <div key={e.id}>
              <h1>{e.name}</h1>
            </div>
          );
        })}
      </div>
    );
  }
}
