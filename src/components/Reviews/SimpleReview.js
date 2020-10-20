import React from 'react'
import { Link } from 'react-router-dom'

function SimpleReview(props) {

    const review = props.review

    return (
        <div>
            Huesped: {review.guest.firstname} {review.guest.lastname} - {review.review.score} 
            <Link to={{
                pathname:'/guests/review',
                review: review
            }}>Valorar</Link>
        </div>

    )
}

export default SimpleReview;
