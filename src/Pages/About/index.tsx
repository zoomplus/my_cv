//system
import React, {
    useEffect
} from 'react';

//interfaces
import { AboutProps } from "./interfaces";

const About = ({setTheme, theme}: AboutProps) => {


    const componentDidMount = () => {
        setTheme(theme);
    };
    // eslint-disable-next-line
    useEffect(componentDidMount, []);

    return (
        <div style={{height: '1000px'}}>
            about
        </div>
    );
};

export default About;
