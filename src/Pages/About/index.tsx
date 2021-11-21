import React, {useEffect} from 'react';

const About = ({setTheme, theme}) => {

    useEffect(() => {
        setTheme(theme);
    }, []);

    return (
        <div style={{height: '1000px'}}>
            about
        </div>
    );
};

export default About;
