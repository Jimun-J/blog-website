import React, { useEffect, useState } from 'react'
import './BlogPost.css'
import { useNavigate, useParams } from "react-router-dom";
import { getPost } from '../services/fetch';
import moment from 'moment';
import Navbar from '../components/Navbar/Navbar';
import Loader from '../components/Loader/Loader';
import { RichText } from '@graphcms/rich-text-react-renderer';
import { Link } from 'react-router-dom'
import WestIcon from '@mui/icons-material/West';
import Prism from "prismjs";
import './prism.css';

const BlogPost = ({ scrollToTop, recentPosts }) => {
    const { id } = useParams();
    const [post, setPost] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        Prism.highlightAll();
    }, [post, id]);

    useEffect(() => {
        const fetchData = async () => {
            let post = await getPost(id);
            if (post === null) {
                navigate('/blogs/all');
            } else {
                setPost(post);
            }
        }
        fetchData();
    }, [id, navigate]);

    if (Object.keys(post).length === 0) {
        return <Loader />;
    }

    return (
        <div className="BlogPost">
            <Navbar scrollToTop={scrollToTop} />
            <div className="blog-post-container">
                <div className="content-container">
                    <div className="header" style={{
                        backgroundImage: `url(${post.thumbnail.url})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        borderRadius: '6px',
                        position: 'relative'
                    }}>
                        <div className="overlay"></div>
                        <div className="title">{post.title}</div>
                        <div className="date">Posted: {moment(post.createdAt).format('MMM DD, YYYY')}</div>
                        <div className="tags">
                            {post.postTags.map((tag, index) => (
                                <div className="tag" key={index}>{tag.name}</div>
                            ))}
                        </div>

                        <div className="author">
                            <div className="author-photo">
                                <img src={post.author.photo.url} alt="" />
                            </div>
                            <div className="author-name">{post.author.name}</div>
                        </div>
                    </div>

                    <div className="section">
                        <Link to="/">Home</Link> - <Link to="/blogs/all">Blog</Link> - {post.title}
                    </div>


                    <div className="content">
                        { post.postCategory.name === "Web Design" ? 
                            <RichText
                                content={post.content.raw.children}
                                renderers={{
                                    code_block: ({ children }) => <pre data-dependencies="jsx" className="language-html"><code className="language-html">{children}</code></pre>
                                }}
                            /> 
                            : 
                            <RichText
                            content={post.content.raw.children}
                            renderers={{
                                code_block: ({ children }) => <pre data-dependencies="jsx" className="language-javascript"><code className="language-javascript">{children}</code></pre>
                            }} />
                        }
                        
                    </div>

                    <Link className="read-more" to="/blogs/all" style={{ width: '210px' }} onClick={scrollToTop}>
                        <WestIcon style={{ fontSize: '18px', marginRight: '5px', transform: 'translateY(1px)' }} />
                        Back to Blogs
                    </Link>
                </div>
                <div className="float-right">
                    <div className="fixed">
                        <h2>More from Recent Posts</h2>
                        {recentPosts.map((post, index) => (
                            <Link to={"/post/" + post.node.slug} className="Card">
                                <div className="card-content">
                                    <div className="card-title">
                                        <div>
                                            <span className="author">{post.node.author.name} &#183; {moment(post.node.createdAt).format('MMM DD, YYYY')}</span>
                                            <div>{post.node.title}</div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogPost