import React, { useEffect, useState } from 'react'
import './Card.css'
import { Link } from 'react-router-dom'
import moment from 'moment';

const Card = ({ post }) => {

    const [excerpt, setExcerpt] = useState(post.exceprt);

    useEffect(() => {
        const sliceExcerpt = () => {
            if (post.excerpt.length > 80) {
                setExcerpt(post.excerpt.slice(0, 80) + ' ...');
            } else {
                setExcerpt(post.excerpt);
            }
        }
        
        sliceExcerpt();
    }, [post]);

    return (
        <Link to={"/post/" + post.slug} className="Card">
            <div className="thumbnail-container">
                <img className="thumbnail" src={post.thumbnail.url} alt="" />
            </div>
            <div className="card-content">
                <div className="author-date">
                    <span className="author">{post.author.name} &#183;</span>
                    <span className="date"> {moment(post.createdAt).format('MMM DD, YYYY')}</span>
                </div>
                <div className="card-title">{post.title}</div>
                <div className="excerpt">{excerpt}</div>
                <div className="tags">
                    {post.postTags.map((tag, index) => (
                        <span key={index} className={tag.name}>{tag.name}</span>
                    ))}
                </div>
            </div>
        </Link>
    )
}

export default Card