// Code MovieReviews Here
import React from 'react'

const MovieReviews = ({ reviews }) => {

    return (
        <div className = 'review-list'>
            {reviews.map(review => <div className='review'>
                <h2>{review.headline}</h2>
                <p>By: {review.byline}</p>
                            </div>
            )}
        </div>
    )
}

export default MovieReviews