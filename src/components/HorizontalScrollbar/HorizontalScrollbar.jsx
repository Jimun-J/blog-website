import React, { useContext } from 'react'
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import './HorizontalScrollbar.css'
import EastIcon from '@mui/icons-material/East';
import WestIcon from '@mui/icons-material/West';
import ProjectCard from '../ProjectCard/ProjectCard';

const LeftArrow = () => {
    const { scrollPrev } = useContext(VisibilityContext);
    return (
        <div onClick={() => scrollPrev()} className="left-btn">
            <WestIcon />
        </div>
    )
}

const RightArrow = () => {
    const { scrollNext } = useContext(VisibilityContext);
    return (
        <div onClick={() => scrollNext()} className="right-btn">
            <EastIcon />
        </div>
    )
}

const HorizontalScrollbar = ({ projects }) => {
    return (
        <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
            {projects.map((project, index) => (<ProjectCard project={project} key={index} />))}
        </ScrollMenu>
    )
}

export default HorizontalScrollbar