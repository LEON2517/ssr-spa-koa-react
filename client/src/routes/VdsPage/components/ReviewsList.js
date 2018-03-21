import React, {Component} from 'react'
import VdsReviews from './VdsReviews'

class ReviewsList extends Component{
    render() {
        const {reviews} = this.props

        const reviewsElements = reviews.map(review => (
                <VdsReviews review={review}/>

        ));

        return (

                {reviewsElements}

        )

    }
}

export default ReviewsList