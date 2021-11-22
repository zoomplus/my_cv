//system
import React, { useEffect } from 'react';

//libs
import { useParams } from "react-router-dom";

//interfaces
import {ProjectsProps} from "./interfaces";

const Projects = ({ setTheme, theme, slugProp }: ProjectsProps) => {
    const { slug } = useParams();
    const changePage = () => {
        setTheme(theme);
    };
    // eslint-disable-next-line
    useEffect(changePage, [slug, slugProp]);

    return (
        <div>
            { slugProp ?? slug }
        </div>
    );
};

export default Projects;
