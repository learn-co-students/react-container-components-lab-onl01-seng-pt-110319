import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
export default class SearchableMovieReviewsContainer extends React.Component {

	constructor(props) {
		super(props) 
		this.state = {
			reviews: [],
			searchTerm: []
		}
	}

	handleChange = (event) => {
		event.preventDefault()
		this.setState({
			searchTerm: event.target.value
		})
	}

	handleSubmit = (searchTerm) => {
  		fetch(`https://api.nytimes.com/svc/movies/v2/reviews/search.json?api-key=dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ&query=${searchTerm}`)
  			.then(resp => resp.json())
  			.then(json => {
  				this.setState({
  					reviews: json.results
  				})
  			})
 	}	

	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					Search Reviews:
					<input id="searchTerm" onChange={this.handleChange} value={this.state.searchTerm}/>
					<button type="submit">Search</button>
				</form>
				<MovieReviews reviews={this.state.reviews}/>
			</div>
		)
	}

}