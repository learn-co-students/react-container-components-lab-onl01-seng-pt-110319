import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'
import MovieReview from './MovieReviews';

const NYT_API_KEY = 'your-key-here';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends Component {
    state = {
        reviews: [],
        searchTerm: ""
    }

    onInputChange = (event) => {
        this.setState({
            searchTerm: event.target.value
        })
    }

    onFormSubmit = (event) => {
        event.preventDefault()
        fetch(URL + `${this.state.searchTerm}`)
        .then(res => res.json())
        .then(reviewsData => this.setState({
            reviews: reviewsData
        }))
    }



    render() {
        return (
            <div className="searchable-movie-reviews">
                <form onSubmit={this.onFormSubmit}>
                    <input type="text" value={this.state.searchTerm} onChange={this.onInputChange}></input>
                </form>
                <MovieReview reviews={this.state.reviews} />
            </div>
        )
    }
}

export default SearchableMovieReviewsContainer;