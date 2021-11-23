//system
import React, {ReactNode} from "react";

//libs
import {styled} from "@mui/material/styles";
import {Paper} from "@mui/material";

const Item = ( { children }: {children: ReactNode} ) => {
    const ItemElement = styled(Paper)(({ theme }) => ({
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));

    return <ItemElement>
        {children}
    </ItemElement>
}

export default Item;