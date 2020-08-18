import React from 'react'

const MovieReviews = ({ reviews }) => {
    return (
        <div className = 'review-list'>
            {reviews.map(review => <div className='review'>
                            headline: {review.headline}
                            </div>
            )}
        </div>
    )
}

export default MovieReviews

