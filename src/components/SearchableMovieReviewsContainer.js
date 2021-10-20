import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'your-key-here';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}?query=`;

class SearchableMovieReviewsContainer extends Component {

  state = {
    searchTerm: '',
    reviews: []
  }

  handleSearch = event =>
  this.setState({ searchTerm: event.target.value })

  handleSubmit = (event) => {
    event.preventDefault()
    fetch(URL.concat(this.state.searchTerm))
    .then(resp => resp.json())
    .then(data => this.setState({ reviews: data.results}))
    .then(data => console.log('response', data))
    .catch(error => {
      console.error('Error for animal search - no result found:', error)
    })
  }

  render() {
    return(
      <div className="searchable-movie-reviews">
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleSearch} placeholder="Search Movie Reviews" />
          <input type="submit" />
        </form>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }
}

export default SearchableMovieReviewsContainer