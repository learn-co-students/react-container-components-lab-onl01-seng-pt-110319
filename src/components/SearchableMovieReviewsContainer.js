import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

class SearchableMovieReviewsContainer extends Component {
    constructor() {
        super()

        this.state = {
            reviews: [],
            searchTerm: ""
        }
    }

    handleSearchWord = event => {
        this.setState({
            searchTerm: event.target.value
        })
    }

    searchDatabase = event => {
        event.preventDefault();
        fetch(URL + `&query=${this.state.searchTerm}`)
        .then(response => response.json())
        .then(response => this.setState({ reviews: response.results }))
    }


    render () {
        return (
        <div className="searchable-movie-reviews">
        <form onSubmit={this.searchDatabase}>
            <input type="text" onChange={event => this.handleSearchWord(event)} value={this.state.searchTerm} />
        </form>        
        <MovieReviews reviews={this.state.reviews} />
        </div>
        )
    }
}

export default SearchableMovieReviewsContainer