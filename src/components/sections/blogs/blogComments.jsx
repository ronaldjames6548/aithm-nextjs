import Image from 'next/image';
import React from 'react'
const comments = [
    {
        id: 1,
        author: "John Jones",
        avatar: "/img/all-img/user-1.png",
        date: "April 24, 2019 at 10:59 am",
        content:
            "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s...",
        replies: [
            {
                id: 11,
                author: "Steven Smith",
                avatar: "/img/all-img/user-2.png",
                date: "April 24, 2020 at 10:59 am",
                content:
                    "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s...",
            },
        ],
    },
    {
        id: 2,
        author: "John Jones",
        avatar: "/img/all-img/user-1.png",
        date: "April 21, 2025 at 10:59 am",
        content:
            "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s...",
        replies: [],
    },
];

const BlogComments = () => {
    return (
        <div className="comments-area">
            <h3 className="comments-title">2 Comments:</h3>
            <ol className="comment-list">
                {comments.map((comment) => (
                    <li key={comment.id} className="comment">
                        <CommentCard comment={comment} />

                        {comment.replies?.length > 0 && (
                            <ol className="children">
                                {comment.replies.map((reply) => (
                                    <li key={reply.id} className="comment">
                                        <CommentCard comment={reply} />
                                    </li>
                                ))}
                            </ol>
                        )}
                    </li>
                ))}
            </ol>

            <div className="comment-respond">
                <h3 className="comment-reply-title">Leave a Reply</h3>
                <form className="comment-form">
                    <p className="comment-notes">
                        <span id="email-notes">Your email address will not be published.</span>
                        Required fields are marked <span className="required">*</span>
                    </p>
                    <p className="comment-form-author">
                        <label>Name <span className="required">*</span></label>
                        <input type="text" id="author" placeholder="Your Name*" name="author" required="required" />
                    </p>
                    <p className="comment-form-email">
                        <label>Email <span className="required">*</span></label>
                        <input type="email" id="email" placeholder="Your Email*" name="email" required="required" />
                    </p>
                    <p className="comment-form-comment">
                        <label>Comment</label>
                        <textarea name="comment" id="comment" cols={45} placeholder="Your Comment..." rows={5} maxLength={65525} required="required" defaultValue={""} />
                    </p>
                    <p className="comment-form-cookies-consent">
                        <input type="checkbox" defaultValue="yes" name="wp-comment-cookies-consent" id="wp-comment-cookies-consent" />
                        <label htmlFor="wp-comment-cookies-consent">Save my name, email, and website in this browser for the next time I comment.</label>
                    </p>
                    <p className="form-submit">
                        <input type="submit" name="submit" id="submit" className="submit" defaultValue="Post A Comment" />
                    </p>
                </form>
            </div>
        </div>

    )
}

export default BlogComments

const CommentCard = ({ comment }) => {
    return (
        <article className="comment-body">
            <footer className="comment-meta">
                <div className="comment-author vcard">
                    <Image width={50} height={50} src={comment.avatar} className="avatar" alt="avatar" />
                    <b className="fn">{comment.author}</b>
                </div>
                <div className="comment-metadata">
                    <span>{comment.date}</span>
                </div>
            </footer>
            <div className="comment-content">
                <p>{comment.content}</p>
            </div>
            <div className="reply">
                <a href="#" className="comment-reply-link">
                    Reply
                </a>
            </div>
        </article>
    )
}