import React from 'react'
import './Banner.css'

const Banner = () => {
    return (
        <div className="Banner">
            <div className="text-wrap">
                <div className="title">A <span>Friendly</span> Blog</div>
                <div className="phrase">Resources <span>and</span> Insights</div>
                <div className="description">
                    This personal blog is to learn about the latest technology, tips, and updates needed for full stack web development.
                </div>
                <div className="search">
                    <input type="text" placeholder='Search posts by title' className="search-input" autoComplete='off' />
                    <button className="search-btn">Search</button>
                </div>
            </div>
        </div>
    )
}

export default Banner