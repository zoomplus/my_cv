//system
import React from 'react';

//libs
import {
    Grid,
    Box,
    Typography
} from "@mui/material";

const Footer = () => {
    return (
        <Box sx={{backgroundColor: "background.paper"}}>
            <Grid
                container
                spacing={1}
                direction="column"
                justifyContent="center"
            >
                <Grid item>
                    <Typography variant="overline" display="block" align="center" gutterBottom>
                        © Д. П. Зверев, 2021
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography variant="overline" display="block" align="center" gutterBottom>
                        zoomplus_work@internet.ru
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography variant="overline" display="block" align="center" gutterBottom>
                        +7(902)-44-55-33-2
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Footer;
