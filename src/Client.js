import React, { components } from "react";

export default class Client extends React.Component {
  state = {
    loading: true,
    person: null,
  };

  async componentDidMount() {
    const url = "https://api.covid19api.com/summary";
    const reponse = await fetch(url);
    const data = await reponse.json();
    this.setState({ person: data.Global.NewConfirmed });
    console.log(data);
  }

  render() {
    return (
      <div>
        <center>
          <h1>Global cases</h1>
          <hr></hr>
        </center>
        <center>
          <h1>{this.state.person}</h1>
        </center>
      </div>
    );
  }
}
