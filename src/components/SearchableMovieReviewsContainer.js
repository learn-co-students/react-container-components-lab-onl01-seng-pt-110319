import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}&query=`;

// Code SearchableMovieReviewsContainer Here

class SearchableMovieReviewsContainer extends Component {
    state = {
        searchTerm: String(),
        reviews: []
    }

    handleSubmit = (event) => {
        event.preventDefault();

        fetch(URL + this.state.searchTerm)
        .then(data => data.json())
        .then(json => {
            this.setState({
                reviews: json.results
            })
        })
    }

    handleInputChange = event => {
        this.setState({
            searchTerm: event.target.value
        })
    }

    render() {
        return(
            <div className='searchable-movie-reviews'>
                <form onSubmit={event => this.handleSubmit(event)}>
                    <input onChange={event => this.handleInputChange(event)} />
                    <button type="submit">Search</button>
                </form>
                <MovieReviews reviews={this.state.reviews} />
            </div>
        )
    }
}

export default SearchableMovieReviewsContainer;