import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'LvAtGlmZVMaDXGsH5xOgdLXPJkvVqAr8';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

export default class SearchableMovieReviewsContainer extends Component {

    state= {
        reviews: [], 
        searchTerm: '', 
    }

    handleSubmit = (e) => {
        e.preventDefault()
        let searchURL =URL+`&query=${this.state.searchTerm}`
        fetch(searchURL)
        .then(response => response.json())
        .then((data) => {
            this.setState({
                reviews: data.results
            })
        })
    }

    handleOnChange = (e) => {
        this.setState({
            searchTerm: e.target.value
        })
    }

    render() {
        return (
            <div className="searchable-move-reviews">
                <form onSubmit= {this.handleSubmit}>
                    <input onChange= {this.handleOnChange} type="text" /> 
                    <button type= "submit"> Search </button>
                </form>
                <MovieReviews reviews = {this.state.reviews} /> 
            </div>
        )
    }

}
