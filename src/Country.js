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
    // console.log(data[76].Cases);
    this.setState({ person: data.Countries[76].NewConfirmed });
    console.log(data);
  }

  render() {
    return (
      <div>
        <center>
          <h1> (New)Cases in India</h1>
          <hr></hr>
        </center>
        <center>
          <h1>{this.state.person}</h1>
        </center>
      </div>
    );
  }
}
