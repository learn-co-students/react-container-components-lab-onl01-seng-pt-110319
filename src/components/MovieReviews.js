import React from 'react';



const MovieReviews = ({ reviews }) => (
    <div className="review-list">
        <h2> { reviews.map(review => <div className="review">{review.headline}</div>) } </h2>
    </div>
)


export default MovieReviews