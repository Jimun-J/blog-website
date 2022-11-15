import React from 'react'
import './BookmarkCard.css'

const BookmarkCard = ({ bookmark }) => {
    return (
        <a href={bookmark.siteUrl} className="BookmarkCard" target="_blank" rel="noreferrer">
            <img src={bookmark.thumbnail.url} alt="" />
            <div className='text-wrap'>
                <div className="name">{bookmark.name}</div>
                <div className="description">{bookmark.description}</div>
            </div>
        </a>
    )
}

export default BookmarkCard