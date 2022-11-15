import React, { useEffect, useState } from 'react'
import './BlogPage.css'
import { useParams, useNavigate } from "react-router-dom";
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Section05/Footer';
import AllBlogSection from '../components/Section02/AllBlogSection';
import { getDevelopmentPosts, getDesignPosts, getProjectPosts } from '../services/fetch';

const BlogPage = ({ scrollToTop }) => {
    const { category } = useParams();
    const navigate = useNavigate();
    const [developmentPosts, setDevelopmentPosts] = useState([]);
    const [designPosts, setDesignPosts] = useState([]);
    const [projectPosts, setProjectPosts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            setDevelopmentPosts(await getDevelopmentPosts());
            setDesignPosts(await getDesignPosts());
            setProjectPosts(await getProjectPosts());
        }

        fetchData();
    }, [])

    useEffect(() => {
        if (!(category === 'all' || category === 'web-development'
            || category === 'web-design' || category === 'projects')) {
            navigate('/blogs/all');
        }
    }, [category, navigate]);

    return (
        <div className="BlogPage">
            <Navbar scrollToTop={scrollToTop} />
            <div className="blog-container">
                <div className="title">
                    <span>{category}<br /></span>
                    Blogs
                </div>

                <div className={category !== 'web-development' && category !=='all' ? "hide" : ""}>
                    <div className="category-name" style={{ marginTop: "48px"}}>Web-Development Posts</div>
                    <AllBlogSection posts={developmentPosts} scrollToTop={scrollToTop} />
                </div>

                <div className={category !== 'web-design' && category !=='all' ? "hide" : ""}>
                    <div className="category-name" style={{ marginTop: "48px"}}>Web-Design Posts</div>
                    <AllBlogSection posts={designPosts} scrollToTop={scrollToTop} />
                </div>

                <div className={category !== 'projects' && category !=='all' ? "hide" : ""}>
                    <div className="category-name" style={{ marginTop: "48px"}}>Project Posts</div>
                    <AllBlogSection posts={projectPosts} scrollToTop={scrollToTop} />
                </div>
            </div>
            <Footer scrollToTop={scrollToTop} />
        </div>
    )
}

export default BlogPage