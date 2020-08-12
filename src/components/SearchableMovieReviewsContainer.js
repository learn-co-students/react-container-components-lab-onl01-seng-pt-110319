import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends Component{
    state={
        reviews: [],
        searchTerm: ''
    }

    render() {
        return (
            <div className="searchable-move-reviews">
                <h1>Movie Reviews: </h1>
                <form onSubmit= {this.submit}>    
                    <input onChange= {this.onChange} type="text" placeholder="search"/> 
                    <button type= "submit"> Search </button>
                </form>
                <MovieReviews reviews = {this.state.reviews} /> 
            </div>
        )
    }

    submit = (e) => {
        e.preventDefault()
        let search = URL + `&query=${this.state.searchTerm}`
        fetch(search)
        .then(res => res.json())
        .then((data) => {
            this.setState({
                reviews: data.results
            })
        })
    }

    onChange = (e) => {
        this.setState({
            searchTerm: e.target.value
        })
    }
}
export default SearchableMovieReviewsContainer