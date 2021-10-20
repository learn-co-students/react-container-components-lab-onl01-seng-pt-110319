import React from 'react'

const Review = ({
  display_title,
  headline,
  byline,
  link,
  summary_short
}) => {
  return (
    <div className="review" key={headline}>
      <h1 className="review-title">{display_title}</h1>
      <h4>
        <a className="review-link" href={link.url}>{headline}</a>
      </h4>
      <span className="summary" key={summary_short}>{summary_short}</span>
      <p className="author" key={byline}>{byline}</p>
    </div>
  )
}
const MovieReviews = ({ reviews }) => <div className="review-list">{reviews.map(Review)}</div>

MovieReviews.defaultProps = {
reviews: []
}

export default MovieReviews
