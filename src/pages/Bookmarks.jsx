import React, { useState } from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Section05/Footer'
import BookmarkCard from '../components/BookmarkCard/BookmarkCard'
import Menu from '../assets/menu.svg'
import MenuList from '../assets/menu-list.svg'
import './Bookmarks.css'

const Bookmarks = ({ codingBookmarks, imageBookmarks, colorBookmarks, designBookmarks, scrollToTop }) => {
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = (e) => {
        setIsClicked(current => !current);
    }

    return (
        <div className="Bookmarks">
            <Navbar scrollToTop={scrollToTop}/>
            <div className="bookmarks-container">
                <div className="title">
                    <span>Designer<br /></span>
                    Bookmarks
                </div>
                <div className="toggle-bar">
                    <div className="toggle-bar-container">
                        <img src={Menu} alt="grid-menu-icon" className={isClicked ? "grid-icon" : "grid-icon active"} onClick={handleClick} />
                        <img src={MenuList} alt="list-menu-icon" className={isClicked ? "list-icon active" : "list-icon"} onClick={handleClick} />
                    </div>
                </div>
                <div className="category-name" style={{ marginTop: "48px"}}>Design-Reference</div>
                <div className={isClicked ? "container-list" : "container-grid"}>
                    {designBookmarks.map((bookmark, index) => (
                        <BookmarkCard key={index} bookmark={bookmark} />
                    ))}
                </div>
                <div className="category-name">Color & Gradation</div>
                <div className={isClicked ? "container-list" : "container-grid"}>
                    {colorBookmarks.map((bookmark, index) => (
                        <BookmarkCard key={index} bookmark={bookmark} />
                    ))}
                </div>
                <div className="category-name">Free Stock Images</div>
                <div className={isClicked ? "container-list" : "container-grid"}>
                    {imageBookmarks.map((bookmark, index) => (
                        <BookmarkCard key={index} bookmark={bookmark} />
                    ))}
                </div>
                <div className="category-name">Coding</div>
                <div className={isClicked ? "container-list" : "container-grid"}>
                    {codingBookmarks.map((bookmark, index) => (
                        <BookmarkCard key={index} bookmark={bookmark} />
                    ))}
                </div>
            </div>
            <Footer scrollToTop={scrollToTop} />
        </div>
    )
}

export default Bookmarks