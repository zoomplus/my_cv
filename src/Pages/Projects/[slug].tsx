//system
import React, {useEffect, useState} from 'react';

//libs
import { useParams } from "react-router-dom";
import {
    Grid,
    Typography,
    Divider,
    Chip,
    ButtonGroup,
    Button,
    Container,
    Paper,
    Card,
    CardMedia
} from "@mui/material";

//components
import Item from "../../components/Item";

//data
import { getProject } from "../../data";

//interfaces
import {
    ProjectsProps,
    ViewStatus
} from "./interfaces";

const Projects = ({ setTheme, theme, slugProp }: ProjectsProps) => {

    //Get Data and Component Did Mount
    const slug = useParams().slug ?? slugProp ?? '';
    const { data } = getProject(slug);

    const changePage = () => {
        setTheme(theme);
    };
    // eslint-disable-next-line
    useEffect(changePage, [slug, slugProp]);

    //State
    const [viewStatus, setViewStatus] = useState<ViewStatus>(ViewStatus.desktop);

    return (
        <Container>
            <Grid container spacing={5} paddingY={5}>
                <Grid item xs={12}>
                    <Typography variant="h5" component="div" gutterBottom>
                        { data.title }
                    </Typography>
                </Grid>
                <Grid container item xs={12}>
                    <Typography variant="h6" gutterBottom component="div">
                        Technologies:
                    </Typography>

                    <Grid container item spacing={2}>
                        {
                            data.technologies.map((item) => {
                                return <Grid item>
                                    <Item>{ item }</Item>
                                </Grid>;
                            })
                        }
                    </Grid>
                </Grid>

                <Grid item xs={12}>
                    <Divider flexItem>
                        <Chip label="How looks" />
                    </Divider>
                </Grid>

                <Grid container item xs={12} justifyContent="center" alignItems="center">
                    <ButtonGroup variant="contained" aria-label="outlined primary button group">
                        <Button onClick={() => {
                            setViewStatus(ViewStatus.desktop);
                        }}>Desktop</Button>
                        <Button onClick={() => {
                            setViewStatus(ViewStatus.mobile);
                        }}>Mobile</Button>
                    </ButtonGroup>
                </Grid>

                <Grid item xs={12}>
                    <Divider flexItem />
                </Grid>

                <Grid container item justifyContent="center" xs={12}>
                    <Grid item>
                        <Paper elevation={3} sx={{
                            maxWidth: {
                                xs: '100%',
                                lg: viewStatus === ViewStatus.mobile ? '375px' : '100%'
                            }
                        }}>
                            <Card>
                                <CardMedia
                                    component="img"
                                    image={ data.screenshot[viewStatus] }
                                    alt="green iguana"
                                />
                            </Card>
                        </Paper>
                    </Grid>
                </Grid>

                <Grid container item xs={12} justifyContent="center" alignItems="center">
                    <Grid item>
                        <Button variant="contained" href={ data.website }>Перейти на сайт</Button>
                    </Grid>
                </Grid>

            </Grid>
        </Container>
    );
};

export default Projects;
