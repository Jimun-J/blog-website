import React, { useEffect, useState } from 'react'
import './AllBlogSection.css'

import { getAllPosts } from '../../services/fetch'
import Card from '../Card/Card';

import Pagination from '@mui/material/Pagination';
import { Stack } from '@mui/material';

const AllBlogSection = () => {
    const [posts, setPosts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(6);
    const [width, setWidth] = useState(window.innerWidth);

    // get all posts
    useEffect(() => {
        const fetchPosts = async () => {
            setPosts(await getAllPosts());
        }

        fetchPosts();
    }, []);

    // update window width
    // code from: https://stackoverflow.com/questions/60642486/react-hooks-useeffect-update-window-innerheight
    useEffect(() => {
        const updateWindowDimensions = () => {
            const newWidth = window.innerWidth;
            setWidth(newWidth);
        };

        window.addEventListener('resize', updateWindowDimensions);
        return () => window.removeEventListener("resize", updateWindowDimensions)
    }, []);

    // change numbers of posts per page depending on window's width
    useEffect(() => {
        const updatePostsPerPage = () => {
            if (width < 769 && width > 500) {
                // tablet has four posts per page
                setPostsPerPage(4);
                setCurrentPage(1);
            } else if (width < 501) {
                // mobile has two posts per page
                setPostsPerPage(2);
                setCurrentPage(1);
            } else {
                // desktop has six posts per page
                setPostsPerPage(6);
                setCurrentPage(1);
            }
        }
        updatePostsPerPage();
    }, [width]);


    // get posts for a specified page 
    const indexOfLast = currentPage * postsPerPage;
    const indexOfFirst = indexOfLast - postsPerPage;
    const currentPosts = posts.slice(indexOfFirst, indexOfLast); // starting from the first page, getting posts of index 0 to 2

    // set page
    const paginate = (event, value) => {
        setCurrentPage(value);
    }

    return (
        <div className="AllBlogSection">
            <div className="title">All blog posts</div>
            <div className="all-blog-container">
                {currentPosts.map((post, index) => (<Card post={post} key={index} />))}
            </div>
            <Stack sx={{ mt: { lg: '70px', xs: '60px' } }} alignItems="center">
                {posts.length > 3 && (
                    <Pagination
                        color="standard"
                        shape="rounded"
                        defaultPage={1}
                        count={Math.ceil(posts.length / postsPerPage)}
                        page={currentPage}
                        onChange={paginate}
                        size="large"
                    />
                )}
            </Stack>
        </div>
    )
}

export default AllBlogSection