import React, { useEffect, useState } from 'react'
import './ProjectPost.css'
import { useParams, useNavigate } from "react-router-dom";
import { getProject } from '../services/fetch';
import moment from 'moment';
import Navbar from '../components/Navbar/Navbar';
import Loader from '../components/Loader/Loader';
import { RichText } from '@graphcms/rich-text-react-renderer';
import { Link } from 'react-router-dom'
import WestIcon from '@mui/icons-material/West';

const ProjectPost = ({ scrollToTop }) => {
    const { id } = useParams();
    const [project, setProject] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            let project = await getProject(id);
            if (project === null) {
                navigate('/projects');
            } else {
                setProject(project);
            }
        }
        fetchData();
    }, [id, navigate]);

    if (Object.keys(project).length === 0) {
        return <Loader />;
    }

    return (
        <div className="ProjectPost">
            <Navbar scrollToTop={scrollToTop} />
            <div className="project-post-container">
                <div className="header" style={{
                    backgroundImage: `url(${project.thumbnail.url})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    borderRadius: '6px',
                    position: 'relative'
                }}>
                    <div className="overlay"></div>
                    <div className="title">{project.title}</div>
                    <div className="date">Posted: {moment(project.createdAt).format('MMM DD, YYYY')}</div>
                </div>

                <div className="section">
                    <Link to="/">Home</Link> - <Link to="/projects">Projects</Link> - {project.title}
                </div>


                <div className="content">
                    <RichText
                        content={project.content.raw.children}
                    />
                </div>

                <Link className="read-more" to="/projects" style={{ width: '210px' }} onClick={scrollToTop}>
                    <WestIcon style={{ fontSize: '18px', marginRight: '5px', transform: 'translateY(1px)' }} />
                    Back to Projects
                </Link>
            </div>
        </div>
    )
}

export default ProjectPost