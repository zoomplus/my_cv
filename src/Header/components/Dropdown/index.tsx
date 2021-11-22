//system
import React, {useState} from 'react';
import {
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    Popover
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

//interface
import { DropdownProps } from "./interfaces";

const Dropdown = ({ items }: DropdownProps) => {
    //state
    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

    //variables
    const openPopover = Boolean(anchorEl);
    const id = openPopover ? 'simple-popover' : undefined;

    //methods
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <IconButton
                sx={{
                    backgroundColor: 'primary.light'
                }}
                onClick={handleClick}
                aria-describedby='popover'
            >
                <ExpandMoreIcon fontSize="medium"/>
            </IconButton>
            <Popover
                id={id}
                open={openPopover}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
            >
                <nav
                    aria-label="secondary mailbox folders"
                >
                    <List sx={{
                        width: '95vw',
                        overflowY: 'scroll',
                        maxHeight: '100px'
                    }}>
                        {
                            items
                                .sort((a, b) => a.sort > b.sort ? 1 : -1)
                                .map((item, index) => {
                                    return <ListItem disablePadding key={index}>
                                        <ListItemButton component="a" href={`/projects/${item.slug}/`}>
                                            <ListItemText primary={item.name} />
                                        </ListItemButton>
                                    </ListItem>
                                })
                        }
                    </List>
                </nav>
            </Popover>
        </>
    );
};

export default Dropdown;
