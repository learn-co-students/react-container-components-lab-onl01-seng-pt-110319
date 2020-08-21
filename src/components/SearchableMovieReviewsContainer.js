import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}&query=`;

class SearchableMovieReviewsContainer extends Component {
    state = {
        reviews: [],
        searchTerm: ""
    }

    handleSearchTermChange = (e) => this.setState({ searchTerm: e.target.value })

    handleSubmit = (e) => {
        e.preventDefault();

        fetch(URL.concat(this.state.searchTerm)).then(res => res.json()).then(data => this.setState({ reviews: data.results }))
    }

    render() {
        return (
            <div className="searchable-movie-reviews">
                <form className="search-form" onSubmit={this.handleSubmit}>
                    <label htmlFor="search">Enter Search</label>
                    <input id="search" type="text" onChange={this.handleSearchTermChange} />
                    <button type="button">Search...</button>
                </form>
                < MovieReviews reviews={this.state.reviews} />
            </div>
        )
    }
}

export default SearchableMovieReviewsContainer;