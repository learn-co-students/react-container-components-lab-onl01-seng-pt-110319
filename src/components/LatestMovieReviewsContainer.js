// import React, { Component } from 'react';
// import 'isomorphic-fetch';
// import MovieReviews from './MovieReviews'

// const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
// const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
//             + `api-key=${NYT_API_KEY}`;


// export default class LatestMovieReviewsContainer extends React.Component {
   
//     constructor(props) {
//         super(props)
//         this.state = {
//             reviews: []
//         }
//     }

//         componentDidMount() {
//         fetch(URL)
//         .then(resp => resp.json())
//         .then(reviewInfo => this.setState({ reviews: reviewInfo.results}))
//         .catch(err => console.log(err))

//     }
    
//     render() {
//         return (
//             <div className="latest-movie-reviews">
//                 {/* {console.log(this.state.reviews)} */}
//                 <MovieReviews reviews={this.state.reviews}/>
//             </div>
//         )
//     }
// }

import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'
import MovieReview from './MovieReviews';

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here
class LatestMovieReviewsContainer extends Component {
    state = {
        reviews: []
    }

    componentDidMount() {
        fetch(URL)
        .then(res => res.json())
        .then(reviewData => this.setState({ reviews: reviewData.results }))
    }

    render() {
        return (
            <div className="latest-movie-reviews">
                <MovieReview reviews={this.state.reviews} />
            </div>
        )
    }
}

export default LatestMovieReviewsContainer;