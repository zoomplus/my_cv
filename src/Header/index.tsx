//system
import React, {
    useState,
    useEffect
} from 'react';

//libs
import {
    Grid,
    AppBar,
    Toolbar,
    Typography,
    Button,
    Avatar,
    Stack,
    Divider,
    Box,
    Slide,
    Fade,
    useScrollTrigger
} from '@mui/material';
import { Link } from 'react-router-dom';

//hooks
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

//components
import Dropdown from "./components/Dropdown";
import Item from "../components/ItemList";

//interfaces
import { HeaderProps } from "./interfaces";

const Header = ({ projectList }: HeaderProps) => {
    //state
    const [avatarActive, setAvatarActive] = useState(true);
    const [dropDownActive, setDropDownActive] = useState(false);

    //hooks
    const trigger = useScrollTrigger();
    const currentTheme = useTheme();
    const isMobile = useMediaQuery(currentTheme.breakpoints.down('sm'));

    useEffect(() => {
        if(isMobile) {
            if (trigger) {
                setAvatarActive(false);
            } else {
                setDropDownActive(false);
            }
        }
    }, [trigger, isMobile]);

    return (
        <AppBar position="sticky">
            <Toolbar variant="regular">
                <Grid
                    container
                    spacing={1}
                    direction="row"
                    alignItems="center"
                    sx={{
                        justifyContent: isMobile ? 'start' : 'space-between'
                    }}
                >
                    {/* transition effect */}
                    <Slide
                        direction="right"
                        in={avatarActive}
                        onExited={() => {
                            setDropDownActive(true);
                        }}
                        mountOnEnter
                        unmountOnExit
                    >
                        <Grid item>
                            <Avatar alt="Dmitry Zverev" src="/myphoto.jpeg" />
                        </Grid>
                    </Slide>
                    {/* end */}

                    <Grid
                        item
                        container
                        direction="column"
                        justifyContent="center"
                        sx={{
                            width: 'auto',
                            marginBottom: {
                                sm: '5px'
                            },
                            marginTop: {
                                sm: '8px'
                            },
                        }}
                    >
                        <Typography variant="h6" color="inherit" align="center" component="div">
                            <Link to={'/'}>
                                Dmitry Zverev
                            </Link>
                        </Typography>
                        {
                            !isMobile ? (
                                <Typography variant="overline" display="block" align="center" gutterBottom>
                                    Front End React Developer
                                </Typography>
                            ) : null
                        }
                    </Grid>

                    {/* transition effect */}
                    <Fade
                        in={dropDownActive}
                        onExited={() => {
                            setAvatarActive(true);
                        }}
                        mountOnEnter
                        unmountOnExit
                    >
                        <Grid item>
                            <Dropdown items={projectList}/>
                        </Grid>
                    </Fade>
                    {/* end */}

                    { !isMobile ?
                        (
                            projectList.length <= 2 ? (<>
                                <Stack
                                    direction="row"
                                    divider={<Divider orientation="vertical" flexItem />}
                                    spacing={1}
                                    sx={{
                                        paddingTop: '8px'
                                    }}
                                >
                                    {
                                        projectList
                                            .sort((a, b) => a.sort > b.sort ? 1 : -1)
                                            .map((item, index) => {
                                                return <Item key={index}>
                                                    <Link to={`/projects/${item.slug}/`}>
                                                        <Typography variant="overline" display="block" align="center">
                                                            {item.name}
                                                        </Typography>
                                                    </Link>
                                                </Item>
                                            })
                                    }
                                </Stack>
                            </>) : (<>
                                <Stack
                                    direction="row"
                                    divider={<Divider orientation="vertical" flexItem />}
                                    spacing={1}
                                    sx={{
                                        paddingTop: '8px'
                                    }}
                                >
                                    {
                                        projectList
                                            .slice(0, 2)
                                            .sort((a, b) => a.sort > b.sort ? 1 : -1)
                                            .map((item, index) => {
                                                return <Item key={index}>
                                                    <Link to={`/projects/${item.slug}/`}>
                                                        <Typography variant="overline" display="block" align="center">
                                                            {item.name}
                                                        </Typography>
                                                    </Link>
                                                </Item>
                                            })
                                    }
                                </Stack>
                                <Box sx={{
                                    paddingTop: '8px'
                                }}>
                                    <Dropdown items={projectList.slice(2, projectList.length)}/>
                                </Box>

                            </>)
                        )
                    : null }

                    <Grid item>
                        <Button variant="contained" color="secondary">
                            <Link to={'/about/'}>
                                Обо мне
                            </Link>
                        </Button>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
