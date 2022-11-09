import React from 'react'
import './RecentBlogSection.css'

const RecentBlogSection = () => {
    const posts = [
        { title: 'React Testing', excerpt: 'Learn from Testing' },
        { title: 'React with Tailwind', excerpt: 'Learn React with Tailwind' }
    ]
    
    return (
        <div className="RecentBlogSection">
            <div className="recent-blog-container">
                <div className="title">Recent blog posts</div>
            </div>
        </div>
    )
}

export default RecentBlogSection