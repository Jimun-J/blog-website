import React, { useEffect, useState } from 'react'
import './RecentBlogSection.css'
import Card from '../Card/Card'
import { getRecentPosts } from '../../services/fetch'

const RecentBlogSection = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            setPosts(await getRecentPosts());
        }

        fetchPosts();
    }, []);

    return (
        <div className="RecentBlogSection">
            <div className="recent-blog-section">
                <h3 className="title">Recent blog posts</h3>
                <div className="recent-blog-container">
                    {posts.map((post, index) => (<Card post={post.node} key={index} />))}
                </div>
            </div>
        </div>
    )
}

export default RecentBlogSection