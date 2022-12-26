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
import Ratings from './Ratings';

export default function MediaCard() {
    const agentList = [
        {
            image: "http://randomuser.me/api/portraits/men/10.jpg",
            agentName: "Martin Smith",
            agentSpecialization: "Real Estate Agent"
        },
        {
            image: "http://randomuser.me/api/portraits/women/10.jpg",
            agentName: "Felica Agenl",
            agentSpecialization: "Real Estate Agent"
        },
        {
            image: "http://randomuser.me/api/portraits/women/12.jpg",
            agentName: "Sara Lisbon",
            agentSpecialization: "Real Estate Agent"
        },

    ];
    return (
        <Box sx={{ padding: '3' }}>
            <Box>
                <Typography variant='h5' sx={{ textAlign: 'center' }}>Meet Our Agents</Typography>
            </Box>
           <Box sx={{display: "flex", justifyContent: "space-between"}}>
           {agentList.map(({image, agentName, agentSpecialization}, id)=>(
                <Card sx={{ maxWidth: 345 }} key={id}>
                <CardMedia sx={{ marginTop: "10px" }}>
                    <Avatar alt="Remy Sharp" src={image} sx={{ dispaly: "block", margin: "auto", height: "70px", width: "70px" }} />
                </CardMedia>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div" sx={{ textAlign: "center" }}>
                        {agentName}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ textAlign: "center" }}>
                        {agentSpecialization}
                    </Typography>
                    <Ratings sx={{}} />
                </CardContent>
                <CardActions>
                    <Button size="small"><Instagram /></Button>
                    <Button size="small"><Twitter /></Button>
                    <Button size="small"><Mail /></Button>
                    <Button size="small"><WhatsApp /></Button>
                </CardActions>
            </Card>
            ))}
           </Box>
        </Box>
    );
}