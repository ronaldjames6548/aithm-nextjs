import React from 'react'
import Rating from '../../ui/rating'
import { reviewsData } from '@/db/reviewsData';
import Image from 'next/image';
const ratingData = {
    5: 100,
    4: 75,
    3: 50,
    2: 25,
    1: 0,
};

const ProductReviewDetails = () => {
    return (
        <div className="tab-pane fade" id="reviews-tab-pane" role="tabpanel" aria-labelledby="reviews-tab" tabIndex={0}>
            <div className="row">
                <div className="col-lg-6">
                    <div className="products-reviews">
                        <h3>Products Rating</h3>
                        <Rating rating={4} />
                        <div className="rating-count">
                            <span>5.00</span>
                        </div>
                        <div className="row">
                            {[5, 4, 3, 2, 1].map((star) => (
                                <React.Fragment key={star}>
                                    <div className="side">
                                        <div>{star} star{star > 1 && 's'}</div>
                                    </div>
                                    <div className="middle">
                                        <div className="bar-container">
                                            <div
                                                className={`bar bar-${star}`}
                                                style={{ width: `${ratingData[star] || 0}%` }}
                                            />
                                        </div>
                                    </div>
                                    <div className="side right">
                                        <div>{ratingData[star] || 0}%</div>
                                    </div>
                                </React.Fragment>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="review-form-wrapper">
                        <h3>Add a review</h3>
                        <p className="comment-notes">Your email address will not be published. Required fields are marked <span>*</span></p>
                        <form>
                            <div className="row">
                                <div className="col-lg-12 col-md-12">
                                    <div className="rating">
                                        <input type="radio" id="star5" name="rating" defaultValue={5} /><label htmlFor="star5" />
                                        <input type="radio" id="star4" name="rating" defaultValue={4} /><label htmlFor="star4" />
                                        <input type="radio" id="star3" name="rating" defaultValue={3} /><label htmlFor="star3" />
                                        <input type="radio" id="star2" name="rating" defaultValue={2} /><label htmlFor="star2" />
                                        <input type="radio" id="star1" name="rating" defaultValue={1} /><label htmlFor="star1" />
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Name *" />
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                    <div className="form-group">
                                        <input type="email" className="form-control" placeholder="Email *" />
                                    </div>
                                </div>
                                <div className="col-lg-12 col-md-12">
                                    <div className="form-group">
                                        <textarea placeholder="Your review" className="form-control" cols={30} rows={6} defaultValue={""} />
                                    </div>
                                </div>
                                <div className="col-lg-12 col-md-12">
                                    <p className="comment-form-cookies-consent">
                                        <input type="checkbox" id="test1" />
                                        <label htmlFor="test1">Save my name, email, and website in this browser for the next time I comment.</label>
                                    </p>
                                </div>
                                <div className="col-lg-12 col-md-12">
                                    <button type="submit">Submit</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="products-review-comments">
                <h3>{reviewsData.length} Reviews</h3>
                {reviewsData.map((review, index) => (
                    <div key={index} className="user-review">
                        <Image width={90} height={90} src={review.image} alt={review.name} />
                        <div className="review-rating">
                            <Rating rating={review.rating} />{" "}
                            <span className="d-inline-block">{review.name}</span>
                        </div>
                        <span className="d-block sub-comment">{review.commentTitle}</span>
                        <p>{review.comment}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ProductReviewDetails