import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}&query=`;

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends Component {
    state = {
        reviews: [],
        searchTerm: ''
    }

    handleInputChange = event => {
        this.setState({
            searchTerm: event.target.value
        })        
    }

    handleSubmit = event => {
        event.preventDefault()

        fetch(URL.concat(this.state.searchTerm))
        .then(res => res.json())
        .then(data => this.setState({ reviews: data.results}))
    }

    render() {
        return(
            <div className='searchable-movie-reviews'>
                <form onSubmit={this.handleSubmit}>
                    <label>Search Movie Reviews: </label>
                    <input type='text' id='search-input' onChange={this.handleInputChange}/>
                    <button type ="submit">Submit</button>
                </form>
                {/* {typeof this.state.reviews === 'object' &&
                this.state.reviews.length > 0 && <h2>Movie Review By Search:</h2>} */}

                <MovieReviews reviews={this.state.reviews}/>
            </div>
        )
    }
}

export default SearchableMovieReviewsContainer