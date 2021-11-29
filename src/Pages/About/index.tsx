//system
import React, {
    useEffect
} from 'react';

//libs
import {
    AccordionDetails,
    Accordion,
    AccordionSummary,
    Container,
    Grid,
    Typography
} from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

//components
import ItemList from "../../components/ItemList";

//data
import dataAboutMe from "../../dataAboutMe";

//interfaces
import { AboutProps } from "./interfaces";

const About = ({setTheme, theme}: AboutProps) => {

    const componentDidMount = () => {
        setTheme(theme);
    };
    // eslint-disable-next-line
    useEffect(componentDidMount, []);

    return (
        <Container>
            <Grid container spacing={5} paddingY={4}>
                <Grid item xs={12}>
                    <Typography variant="h5" component="div" gutterBottom>
                        About me
                    </Typography>
                    <Typography dangerouslySetInnerHTML={{ __html: dataAboutMe.about }}></Typography>
                </Grid>

                <Grid container item xs={12}>
                    <Typography variant="h6" gutterBottom component="div">
                        Skills:
                    </Typography>

                    <Grid container item spacing={2}>
                        {
                            dataAboutMe.skills.map((item) => {
                                return <Grid item>
                                    <ItemList>{ item.name }</ItemList>
                                </Grid>
                            })
                        }
                    </Grid>
                </Grid>

                <Grid container item xs={12} direction='column'>
                    <Grid item spacing={2}>
                        <Typography variant="h6" gutterBottom component="div">
                            Previously working places:
                        </Typography>
                    </Grid>

                    <Grid item spacing={2}>
                        {
                            dataAboutMe.workingPlaces.map((item) => {
                                return <Accordion>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1bh-content"
                                        id="panel1bh-header"
                                    >
                                        <Typography sx={{ width: '33%', flexShrink: 0 }}>
                                            { item.name }
                                        </Typography>
                                        <Typography sx={{ color: 'text.secondary' }}>
                                            { item.time }
                                        </Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            { item.description }
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            })
                        }
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    );
};

export default About;
