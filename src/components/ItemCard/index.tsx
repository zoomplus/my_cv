import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

//interfaces
import { ItemCardProps } from "../ItemList/interfaces";

const ItemCard = ({ image, link, description, name }: ItemCardProps) => {
    return (
        <Card>
            <CardMedia
                component="img"
                height="140"
                image={image}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {description}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="medium" href={`/projects/${link}/`}>Learn More</Button>
            </CardActions>
        </Card>
    );
};

export default ItemCard;
