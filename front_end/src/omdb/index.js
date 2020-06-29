import React, { Component } from "react";
import MovieRequest from "../components/regions/Home/content";

class OmdbClient extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <p>GoodDay,please enter movie you would like to search for below...</p>

        <MovieRequest />
      </div>
    );
  }
}

export default OmdbClient;
