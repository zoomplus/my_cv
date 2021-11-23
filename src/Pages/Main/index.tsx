//system
import React, {
    useEffect
} from 'react';

//libs
import {
    Container,
    Grid
} from '@mui/material';

//components
import ItemCard from "../../components/ItemCard";

//interfaces
import {MainProps} from "./interfaces";
import data from "../../data";

const Main = ({setTheme, theme}: MainProps) => {

    const componentDidMount = () => {
        setTheme(theme);
    };
    // eslint-disable-next-line
    useEffect(componentDidMount, []);

    return (
        <Container>
            <Grid container spacing={2} paddingY={4}>
                {
                    data.map((item, index) => {
                        return <Grid item xs={12} sm={6} lg={4} xl={3} id={item.slug} key={index}>
                            <ItemCard image={item.data.screenshot.desktop} name={item.name} description={item.data.title} link={item.slug}/>
                        </Grid>
                    })
                }
            </Grid>
        </Container>
    );
};

export default Main;
