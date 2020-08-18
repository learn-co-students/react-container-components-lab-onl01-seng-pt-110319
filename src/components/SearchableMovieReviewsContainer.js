import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}&query=`;


class SearchableMovieReviewsContainer extends Component{

    state = {
        searchTerm: '',
        reviews: []
    }


            
    fetcher = (query) => {
        fetch(URL.concat(query))
        .then(result => result.json())
        .then(data => this.setState({reviews: data.results}))
    }

    submitHandler = (event) =>{
        event.preventDefault()
        this.fetcher(this.state.searchTerm)
    }

    changeHandler = (event) =>{
        this.setState({ searchTerm: event.target.value})
    }

    render(){
       return(<div>
           <form onSubmit={this.submitHandler}>
               <input type="text" onChange={this.changeHandler}/>
               <button type="submit">Search</button>
          </form>
           <MovieReviews reviews={this.state.reviews}/>
       </div>)
    }
}
            
export default SearchableMovieReviewsContainer