// Code MovieReviews Here
import React from 'react';
import LatestMovieReviewsContainer from './LatestMovieReviewsContainer'
import SearchableMovieReviewsContainer from './SearchableMovieReviewsContainer'

const Review = ({headline, byline, summary_short, link}) => {

	return(
		<div>

		<div className="review">{headline}</div>

		<div className="author">{byline}</div>

		<div className="content">{summary_short}</div>

		<div className="review-link">{link.url}</div>

		</div>
	)
}


const MovieReviews = ({reviews}) => (
	<div className="review-list">
		{reviews.map(Review)}
	</div>
)

export default MovieReviews;