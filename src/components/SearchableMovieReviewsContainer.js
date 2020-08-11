// import React, { Component } from 'react';
// import 'isomorphic-fetch';
// import MovieReviews from './MovieReviews'
// import { render } from 'enzyme';

// const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
// const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
//             + `api-key=${NYT_API_KEY}`;

// // Code SearchableMovieReviewsContainer Here

// export default class SearchableMovieReviewsContainer extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state= {reviews: [],
//              searchTerm: ''}
//     }

//     handleChange = (term) => {
//         this.setState({
//             searchTerm: event.target.value
//         })
//     }

  
//     handleSubmit = (event) => {
//         event.preventDefault()
//         fetch(URL + `${this.state.searchTerm}`)
//         .then(resp => resp.json())
//         .then(response => this.setState( { reviews: response}))
//         .catch(err => console.log(err))

//     }
//     render() {
//         return (
//             <div className="searchable-movie-reviews">
//                 <form onSubmit={this.handleSubmit}>
//             <input type="text" onChange={this.handleChange} value={this.state.searchTerm} />
//                 </form>
//                 {/* <MovieReviews reviews={this.state.reviews} /> */}
//                 {/* {this.fetchMovieReviews()} */}
//             </div>
//         )
//     }

// }

import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'
import MovieReview from './MovieReviews';

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
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