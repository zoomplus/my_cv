import React, {
    useEffect
} from 'react';

const Main = ({setTheme, theme}) => {

    useEffect(() => {
        setTheme(theme);
    }, []);

    return (
        <div style={{height: '1000px'}}>
            Main content
        </div>
    );
};

export default Main;
