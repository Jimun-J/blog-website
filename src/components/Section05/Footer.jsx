import React, { useEffect, useState } from 'react'
import './Footer.css'

import { Link } from 'react-router-dom';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import NavigationIcon from '@mui/icons-material/Navigation';

const Footer = ({ scrollToTop }) => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    })
  })

  return (
    <div className="Footer">
      <div className="footer-container">

        <div className="flex-wrap">
          <div className="text-wrap">
            <h2>Please feel free to inquire</h2>
            <div>wkdwlans009@gmail.com</div>
            <div className="logo">
              <Link to="/" onClick={scrollToTop}>JJ.<span>Blog</span></Link>
            </div>
          </div>

          <div className="list">
            <div className="social">
              <div className="list-name">Socials</div>
              <ul>
                <li><a href="https://www.linkedin.com/in/jimun-jang-b1957b1b9/" target="_blank" rel="noreferrer">LinkedIn</a></li>
                <li><a href="https://github.com/Jimun-J" target="_blank" rel="noreferrer">Github</a></li>
                <li><a href="https://www.instagram.com/jang_jimoooon/" target="_blank" rel="noreferrer">Instagram</a></li>
              </ul>
            </div>
            <div className="resource">
              <div className="list-name">Resources</div>
              <ul>
                <li><Link to="/blogs" onClick={scrollToTop}>Blogs</Link></li>
                <li><Link to="/projects" onClick={scrollToTop}>Projects</Link></li>
                <li><Link to="/bookmarks" onClick={scrollToTop}>Bookmarks</Link></li>
              </ul>
            </div>
          </div>

        </div>

        <div className="socials">
          <a href="https://www.linkedin.com/in/jimun-jang-b1957b1b9/" target="_blank" rel="noreferrer"><LinkedInIcon /></a>
          <a href="https://github.com/Jimun-J" target="_blank" rel="noreferrer"><GitHubIcon /></a>
          <a href="https://www.instagram.com/jang_jimoooon/" target="_blank" rel="noreferrer"><InstagramIcon /></a>
        </div>
        <div className="copy-right">&copy; 2022 JJ.Blog. All rights reserved.</div>
      </div>

      <div className={scrolled ? "scrollTop active" : "scrollTop"} onClick={scrollToTop}><NavigationIcon /></div>
    </div>
  )
}

export default Footer