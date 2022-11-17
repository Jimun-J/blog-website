import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import './Banner.css'

const Banner = () => {
    const navigate = useNavigate();
    const inputRef = useRef(null);

    const handleClick = () => {
        navigate(`/search/${inputRef.current.value}`);
    }

    return (
        <div className="Banner">
            <div className="text-wrap">
                <div className="title">A <span>Friendly</span> Blog</div>
                <div className="phrase">Resources <span>and</span> Insights</div>
                <div className="description">
                    This personal blog is to learn about the latest technology, tips, and updates needed for full stack web development.
                </div>
                <div className="search">
                    <input 
                        type="text" 
                        placeholder='Search posts by title, tags' 
                        className="search-input" 
                        autoComplete='off' 
                        ref={inputRef}
                    />
                    <button className="search-btn" onClick={handleClick}>Search</button>
                </div>
            </div>
        </div>
    )
}

export default Banner