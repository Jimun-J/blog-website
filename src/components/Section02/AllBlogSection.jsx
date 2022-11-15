import React, { useEffect, useState } from 'react'
import './AllBlogSection.css'

import Card from '../PostCard/Card';
import Pagination from '@mui/material/Pagination';
import { Stack } from '@mui/material';

const AllBlogSection = ({ posts, scrollToTop }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(6);
    const [width, setWidth] = useState(window.innerWidth);

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
            <h2 className="title">All blog posts</h2>
            <div className="all-blog-container">
                {currentPosts.map((post, index) => (<Card post={post} key={index} onClick={scrollToTop} />))}
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