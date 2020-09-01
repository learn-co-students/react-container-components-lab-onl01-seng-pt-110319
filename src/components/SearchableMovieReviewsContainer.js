import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}&query=`;

class SearchableMovieReviewsContainer extends Component {
    state = {
      reviews: [],
      searchTerm: " "
    }

    onInputChange = (event) => {
      this.setState({
        searchTerm: event.target.value
      })
    }

    onFormSubmit = (event) => {
      event.preventDefault()

      fetch(URL.concat(this.state.searchTerm))
      .then(response => response.json())
      .then(data => this.setState({ reviews: data.results}))
  }

    render() {
      return (
        <div className="searchable-movie-reviews">
          <form onSubmit={this.onFormSubmit}>
            <input type="text" value={this.state.searchTerm} onChange={this.onInputChange}></input>
          </form>
          <MovieReviews reviews={this.state.reviews} />
       </div>
     )
   }
}

export default SearchableMovieReviewsContainer;
