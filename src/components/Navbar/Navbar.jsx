import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
import WebIcon from '@mui/icons-material/Web';
import DescriptionIcon from '@mui/icons-material/Description';

const Navbar = ({ scrollToTop }) => {
    const [isClicked, setIsClicked] = useState(false);
    const [subnavClicked, setSubnavClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(current => !current);
    }

    const handleSubnavClick = () => {
        setSubnavClicked(current => !current);
    }

    return (
        <div className="Navbar">
            <header>
                <div className="logo">
                    <Link to="/" onClick={scrollToTop}>JJ.<span>Blog</span></Link>
                </div>
                <div className={isClicked ? 'main-navigation active' : 'main-navigation'}>
                    <Link to="/" onClick={scrollToTop}>Home</Link>
                    <Link to="/projects" onClick={scrollToTop}>Projects</Link>
                    <Link to="/bookmarks" onClick={scrollToTop}>Bookmarks</Link>
                    <div className="subnav">
                        <Link 
                            className={subnavClicked ? 'subnavbtn active' : 'subnavbtn'}
                            onClick={handleSubnavClick}
                        >
                                Blogs<i className="icon"></i>
                        </Link>
                        <div className={subnavClicked ? 'subnav-content active' : 'subnav-content'}>
                            <Link to="/blogs/web-development" onClick={scrollToTop}>
                                <IntegrationInstructionsIcon style={{ fontSize: 'medium', verticalAlign: 'middle', marginRight: '4px' }}/>
                                Web Development 
                                <ArrowOutwardIcon style={{ fontSize: 'medium', float: 'right' }}/>
                            </Link>
                            <Link to="/blogs/web-design" onClick={scrollToTop}>
                                <WebIcon style={{ fontSize: 'medium', verticalAlign: 'middle', marginRight: '4px' }} />
                                Web Design 
                                <ArrowOutwardIcon style={{ fontSize: 'medium', float: 'right' }} />
                            </Link>
                            <Link to="/blogs/projects" onClick={scrollToTop}>
                                <DescriptionIcon style={{ fontSize: 'medium', verticalAlign: 'middle', marginRight: '4px' }} />
                                Projects <ArrowOutwardIcon style={{ fontSize: 'medium', float: 'right' }}/>
                            </Link>
                            <Link to="/blogs" onClick={scrollToTop}>
                                View All <ArrowOutwardIcon style={{ fontSize: 'medium', float: 'right' }}/>
                            </Link>
                        </div>
                    </div>
                    <Link className="contact" to="/contact" style={{ color: 'white' }}>contact</Link>
                </div>
                <button className={isClicked ? 'more-btn active' : 'more-btn'} onClick={handleClick}>
                    <i className="icon"></i>
                </button>
            </header>
        </div>
    )
}

export default Navbar