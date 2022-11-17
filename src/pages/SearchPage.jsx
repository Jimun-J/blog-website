import React, { useEffect, useState, useRef } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import './SearchPage.css'
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Section05/Footer';
import { useParams } from 'react-router-dom';
import { getResultByTagName, getResultByTitleName } from '../services/fetch';
import Pagination from '@mui/material/Pagination';
import { Stack } from '@mui/material';

const SearchPage = ({ scrollToTop }) => {
    const { input } = useParams();
    const [result, setResult] = useState([]);
    const [isFound, setIsFound] = useState(false);
    
    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 5;

    const navigate = useNavigate();
    const inputRef = useRef(null);
    const indexOfLast = currentPage * postsPerPage;
    const indexOfFirst = indexOfLast - postsPerPage;
    const currentPosts = result.slice(indexOfFirst, indexOfLast);

    const handleClick = () => {
        navigate(`/search/${inputRef.current.value}`);
    }

    const paginate = (event, value) => {
        setCurrentPage(value);
    }

    useEffect(() => {
        const fetchData = async () => {
            let resultByTagName = await getResultByTagName(input);
            let resultByTitleName = await getResultByTitleName(input);
            if (resultByTagName.length === 0 && resultByTitleName.length === 0) {
                setIsFound(false);
            } else {
                setIsFound(true);
                if (resultByTagName.length === 0 && resultByTitleName.length !== 0) {
                    setResult(resultByTitleName);
                } else if (resultByTitleName.length === 0 && resultByTagName.length !== 0) {
                    setResult(resultByTagName);
                } else {
                    let result = resultByTagName.filter(result => !resultByTitleName.includes(result));
                    setResult(result);
                }
            }
        }
        fetchData();
    }, [input])

    return (
        <div className="SearchPage">
            <Navbar scrollToTop={scrollToTop} />
            <div className="search-page-container">
                <div className="search">
                    <input
                        type="text"
                        placeholder='Search posts by title, tags'
                        className="search-input"
                        autoComplete='off'
                        ref={inputRef}
                    />
                    <button className="search-btn" onClick={handleClick}>Search</button>
                </div>
                <div className={isFound ? "search-result hide" : "search-result"}>
                    <div className="no-result">
                        <h2>Sorry, we did not find any results for <span className="keyword">{input}</span></h2>
                        <div>Make sure all words are spelled correctly.</div>
                        <div>Try different tag names or title names.</div>
                        <div>Try fewer keywords.</div>
                    </div>
                </div>
                <div className={isFound ? "search-result" : "search-result hide"}>
                    <h2 style={{ margin: '48px 0' }}>Results for <span className="keyword">{input}</span></h2>
                    {currentPosts.map((result, index) => (
                        <div key={index} className="result">
                            <Link to={"/post/" + result.slug}>
                                <div className="card-title">{result.title}</div>
                                <div className="excerpt">{result.excerpt}</div>
                            </Link>
                        </div>
                    ))}
                    <Stack sx={{ mt: { lg: '70px', xs: '60px' } }} alignItems="center">
                        {result.length > 5 && (
                            <Pagination
                                color="standard"
                                shape="rounded"
                                defaultPage={1}
                                count={Math.ceil(result.length / postsPerPage)}
                                page={currentPage}
                                onChange={paginate}
                                size="large"
                            />
                        )}
                    </Stack>
                </div>
            </div>
            <Footer scrollToTop={scrollToTop} />
        </div>
    )
}

export default SearchPage