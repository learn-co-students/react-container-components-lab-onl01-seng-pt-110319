// Code MovieReviews Here
import React from 'react';

const MovieReviews = props => {
    const reviews = props.reviews.map(review => {
        return(
            <div className='review' key={review.display_title}>
                <h1>{review.display_title}</h1>
                <h3>By: {review.byline}</h3>
                <p>{review.summary_short}</p>
            </div>
        )
    })

    return <div className='review-list'>{reviews}</div>
}

export default MovieReviews;