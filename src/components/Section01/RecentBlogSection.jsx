import React from 'react'
import './RecentBlogSection.css'
import Card from '../Card/Card'

const RecentBlogSection = ({ posts }) => {
    return (
        <div className="RecentBlogSection">
            <div className="recent-blog-section">
                <h2 className="title">Recent blog posts</h2>
                <div className="recent-blog-container">
                    {posts.map((post, index) => (<Card post={post.node} key={index} />))}
                </div>
            </div>
        </div>
    )
}

export default RecentBlogSection