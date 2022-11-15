import React, { useState, useEffect } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Bookmarks from './pages/Bookmarks'
import ProjectPage from './pages/ProjectPage'
import ContactPage from './pages/ContactPage'
import { getAllProjects, getRecentPosts, getAllPosts, getAllBookmarks } from './services/fetch'

const App = () => {
  const [projects, setProjects] = useState([]);
  const [recentPosts, setRecentPosts] = useState([]);
  const [allPosts, setAllPosts] = useState([]);
  const [bookmarks, setBookmarks] = useState([]);

  // get data (projects, posts, bookmarks, recent posts)
  useEffect(() => {
    const fetchData = async () => {
      setRecentPosts(await getRecentPosts());
      setAllPosts(await getAllPosts());
      setProjects(await getAllProjects());
      setBookmarks(await getAllBookmarks());
    }

    fetchData();
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage projects={projects} recentPosts={recentPosts} allPosts={allPosts} />} />
        <Route path="/bookmarks" element={<Bookmarks bookmarks={bookmarks}/>} />
        <Route path="/projects" element={<ProjectPage projects={projects} />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </div>
  )
}

export default App
