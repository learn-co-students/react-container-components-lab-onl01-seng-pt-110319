import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`+`&query=`

// Code SearchableMovieReviewsContainer Here
function urlSearchTerm(term){
    return `${URL}+${term}`
}

class SearchableMovieReviewsContainer extends Component{
    constructor(){
        super();
        this.state={
            reviews:[],
            searchTerm: ""

        }
    }

    fetcher=(searchTerm)=>{
        fetch(urlSearchTerm(searchTerm))
        .then(response=>response.json())
        .then(movies=>this.setState({reviews: movies.results}))
    }



    submitHandler=(searchTerm)=>{
        searchTerm.preventDefault()
       this.fetcher(this.state.searchTerm)
    }

    changeHandler=(event)=>{
        this.setState({
            searchTerm: event.target.value
        })
    }


    render(){
        return(
            <div className="searchable-movie-reviews">
            <form onSubmit={this.submitHandler}>
                <input type="text" onChange={this.changeHandler}/>
                <button type="submit">Search</button>
            </form>
                <MovieReviews reviews={this.state.reviews}/>
            </div>
        )
    }
}

export default SearchableMovieReviewsContainer;