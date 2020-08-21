import React from 'react';

const Review = ({headline, link}) => {
    return (
        <div key={headline} className="review">
            <a href={link.url} className="review-link">
                {headline}
            </a>
        </div>
    )
}

const MovieReviews = ({reviews}) => <div className="review-list">{reviews.map(Review)}</div>

MovieReviews.defaultProps = { reviews: [] }

export default MovieReviews;