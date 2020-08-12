// Code MovieReviews Here
import React from 'react'

const MovieReviews = ({reviews}) => {
    
    const Review =({headline,byline,link,summary_short})=>{
        return (
            <div className="review">
                <ul>
                    <li>
                        <a className="review-link" href={link.url}>{headline}</a>
                        <p className="author">By: {byline}</p>
                        <p> {summary_short}</p>
                    </li>
                </ul>
            </div>
        )
    } 

    return(
        <div className='review-list'>
                {reviews.map(Review)}
        </div>
    )
    
}
export default MovieReviews