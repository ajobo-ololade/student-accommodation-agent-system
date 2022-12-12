import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box'
import { Instagram, Mail, Twitter, WhatsApp } from '@mui/icons-material';

export default function MediaCard() {
    return (
        <Box sx={{padding: '3'}}>
            <Box>
                <Typography variant='h5' sx={{textAlign: 'center'}}>Meet Our Agents</Typography>
            </Box>
            <Card sx={{ maxWidth: 345 }}>
            <CardMedia>
                <Avatar alt="Remy Sharp" src="http://randomuser.me/api/portraits/men/10.jpg" />
            </CardMedia>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Richard
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small"><Instagram /></Button>
                <Button size="small"><Twitter /></Button>
                <Button size="small"><Mail /></Button>
                <Button size="small"><WhatsApp /></Button>
            </CardActions>
        </Card>
        </Box>
    );
}