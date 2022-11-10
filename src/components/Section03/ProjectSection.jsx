import React, { useState, useEffect } from 'react'
import './ProjectSection.css'
import HorizontalScrollbar from '../HorizontalScrollbar/HorizontalScrollbar'
import { getAllPosts } from '../../services/fetch'


const ProjectSection = () => {
    const [posts, setPosts] = useState([]);
    // get all posts
    useEffect(() => {
        const fetchPosts = async () => {
            setPosts(await getAllPosts());
        }

        fetchPosts();
    }, []);


    return (
        <div className="ProjectSection">
            <div className="project-section">
                <div className="text-wrap">
                    <h1 className="title">Recent Projects</h1>
                    <div className="sub-title">
                        Check out complete projects
                    </div>
                </div>
                <HorizontalScrollbar posts={posts} />
            </div>
        </div>
    )
}

export default ProjectSection