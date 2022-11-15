import React, { useState, useEffect } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Bookmarks from './pages/Bookmarks'
import ProjectPage from './pages/ProjectPage'
import ContactPage from './pages/ContactPage'
import BlogPage from './pages/BlogPage'
import { 
  getAllProjects, getRecentPosts, getAllPosts, 
  getCodingBookmarks, getDesignBookmarks, getColorBookmarks, getImageBookmarks,
} from './services/fetch'

const App = () => {
  const [projects, setProjects] = useState([]);

  const [recentPosts, setRecentPosts] = useState([]);
  const [allPosts, setAllPosts] = useState([]);

  const [codingBookmarks, setCodingBookmarks] = useState([]);
  const [designBookmarks, setDesignBookmarks] = useState([]);
  const [colorBookmarks, setColorBookmarks] = useState([]);
  const [imageBookmarks, setImageBookmarks] = useState([]);

  // get data (projects, posts, bookmarks, recent posts)
  useEffect(() => {
    const fetchData = async () => {
      setRecentPosts(await getRecentPosts());

      setAllPosts(await getAllPosts());
      setProjects(await getAllProjects());

      setCodingBookmarks(await getCodingBookmarks());
      setDesignBookmarks(await getDesignBookmarks());
      setColorBookmarks(await getColorBookmarks());
      setImageBookmarks(await getImageBookmarks());
    }

    fetchData();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage projects={projects} recentPosts={recentPosts} allPosts={allPosts} scrollToTop={scrollToTop} />} />
        
        <Route path="/bookmarks" element={
          <Bookmarks 
            codingBookmarks={codingBookmarks} 
            designBookmarks={designBookmarks} 
            colorBookmarks={colorBookmarks} 
            imageBookmarks={imageBookmarks} 
            scrollToTop={scrollToTop} 
          />} 
        />
        
        <Route path="/projects" element={<ProjectPage projects={projects} scrollToTop={scrollToTop} />} />
        <Route path="/contact" element={<ContactPage scrollToTop={scrollToTop} />} />

        <Route path="/blogs/:category" element={<BlogPage scrollToTop={scrollToTop} />}/>
      </Routes>
    </div>
  )
}

export default App
