import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'OkEBbscloxiJQh3yQ3ZhAPSb6beR8ASb';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}&query=` ;

// Code SearchableMovieReviewsContainer Here

class SearchableMovieReviewsContainer extends Component {
    constructor() {
        super()

        this.state = {
            reviews: [],
            searchTerm: ''
        }
    }

    componentDidMount() {
        this.fetchReviews()
    }

    fetchReviews = () => {
        fetch(URL)
        .then(res => res.json())
        .then(data => {
            this.setState({ reviews: data.results })
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()

        URL.concat(this.state.searchTerm)
        fetch(URL)
        .then(res => res.json())
        .then(data => {
            this.setState({ reviews: data.results })
        })

    }

    handleChange = (event) => {

        this.setState({ searchTerm: event.target.value })
    }

    render() {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" onChange={this.handleChange}></input>
                    <button type="submit">Search</button>
                </form>
                < MovieReviews reviews={this.state.reviews} />
            </div>

        )
    }
}

export default SearchableMovieReviewsContainer
