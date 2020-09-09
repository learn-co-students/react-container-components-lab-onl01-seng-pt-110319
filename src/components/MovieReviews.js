import React from 'react'

const Review = ({
  headline,
  byline,
  link,
  summary_short
}) => {
  return (
    <div className="review" key={headline}>
      
        <a className="review-link" href={link.url}>
          {headline}
        </a>
        <p className="author" key={byline}>{byline}</p>
        <span className="summary" key={summary_short}>{summary_short}</span>
    </div>
  )
}
const MovieReviews = ({ reviews }) => <div className="review-list">{reviews.map(Review)}</div>

MovieReviews.defaultProps = {
reviews: []
}

export default MovieReviews
