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
    Slide,
    Fade,
    useScrollTrigger
} from '@mui/material';
import { Link } from 'react-router-dom';

//components
import Dropdown from "./components/Dropdown";

const Header = () => {
    //state
    const [avatarActive, setAvatarActive] = useState(true);
    const [dropDownActive, setDropDownActive] = useState(false);
    const trigger = useScrollTrigger();

    useEffect(() => {
        if(trigger) {
            setAvatarActive(false);
        } else {
            setDropDownActive(false);
        }
    }, [trigger]);

    return (
        <AppBar position="sticky">
            <Toolbar variant="regular">
                <Grid
                    container
                    spacing={1}
                    direction="row"
                    alignItems="center"
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

                    <Grid item>
                        <Typography variant="h6" color="inherit" component="div">
                            <Link to={'/'}>
                                Dmitry Zverev
                            </Link>
                        </Typography>
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
                            <Dropdown />
                        </Grid>
                    </Fade>
                    {/* end */}

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
