//system
import React, {
    useEffect
} from 'react';

//interfaces
import {MainProps} from "./interfaces";

const Main = ({setTheme, theme}: MainProps) => {

    const componentDidMount = () => {
        setTheme(theme);
    };
    // eslint-disable-next-line
    useEffect(componentDidMount, []);

    return (
        <div style={{height: '1000px'}}>
            Main content
        </div>
    );
};

export default Main;
