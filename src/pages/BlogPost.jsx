import React, { useEffect, useState } from 'react'
import './BlogPost.css'
import { useParams } from "react-router-dom";
import { getPost } from '../services/fetch';
import moment from 'moment';
import Navbar from '../components/Navbar/Navbar';
import Loader from '../components/Loader/Loader';
import { RichText } from '@graphcms/rich-text-react-renderer';
import { Link } from 'react-router-dom'

const BlogPost = ({ scrollToTop }) => {
    const { id } = useParams();
    const [post, setPost] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            setPost(await getPost(id));
        }
        fetchData();
    }, [id]);

    if (Object.keys(post).length === 0) {
        return <Loader />;
    }

    return (
        <div className="BlogPost">
            <Navbar scrollToTop={scrollToTop} />
            <div className="blog-post-container">
                <div className="header" style={{
                        backgroundImage: `url(${post.thumbnail.url})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        borderRadius: '6px',
                        position: 'relative'
                    }}>
                    <div className="overlay"></div>
                    <div className="title">{post.title}</div>
                    <div className="date">Posted: {moment(post.createdAt).format('MMM DD, YYYY')}</div>
                    <div className="tags">
                        {post.postTags.map((tag, index) => (
                            <div className="tag" key={index}>{tag.name}</div>
                        ))}
                    </div>

                    <div className="author">
                        <div className="author-photo">
                            <img src={post.author.photo.url} alt="" />
                        </div>
                        <div className="author-name">{post.author.name}</div>
                    </div>
                </div>

                <div className="section">
                    <Link>Home</Link> - <Link>Blog</Link> - {post.title}
                </div>


                <div className="content">
                    <RichText
                        content={post.content.raw.children}
                    />
                </div>
            </div>

        </div>
    )
}

export default BlogPost