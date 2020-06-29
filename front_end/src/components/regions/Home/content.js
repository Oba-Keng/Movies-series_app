import React, { Component } from "react";
import styled from "styled-components";

export default class MovieRequest extends Component {
  constructor() {
    super();

    this.state = {
      keyword: "",
      movies: []
    };
  }

  keywordChanged = e => this.setState({ keyword: e.target.value });

  // =${this.state.keyword}

  searchMovie = () =>
    fetch(`http://www.omdbapi.com/?apikey=539d07a9&s`).then(response =>
      response.json().then(this.renderMovies)
    );

  renderMovies = response => this.setState({ movies: response.Search });

  toggleNewMovieModal() {
    this.setState({
      newMovieModal: !this.state.newMovieModal
    });
  }

  render() {
    return (
      <React.Fragment>
        <div>
          <Button
            onClick={this.searchMovie}
            value={this.state.keyword}
            // onChange={this.keywordChanged}
            placeholder="keyword"
          >
            SERIES
          </Button>
          <Button>MOVIES</Button>
        </div>
        <div>
          <ul>
            {this.state.movies.map((movie, id) => (
              <li key={id}>{movie.Title}</li>
            ))}
          </ul>
        </div>
      </React.Fragment>
    );
  }
}

const Button = styled.button`
  font-family: sans-serif;
  font-size: 1.3rem;
  border: none;
  height: 170px;
  width: 140px;
  margin: 5px;
  color: white;
  background: url(/film.jpg)no-repeat center/cover;
  top: 40px;
  top-margin 10px;
`;
