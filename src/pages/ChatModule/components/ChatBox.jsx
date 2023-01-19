import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
        •
    </Box>
);

export const ChatBox = ({ chats }) => {
    const users = JSON.parse(localStorage.getItem('user'));
    console.log(users);
    return (
        <>
            {chats.map(({ message, user }) => (
                <Card sx={{ width: '20%',  maxWidth: '50%', display: 'flex', justifyContent: users.user_name === user.user_name ? 'start' : 'end', my: 2 }}>
                    <CardContent>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            {message}
                        </Typography>
                    </CardContent>
                </Card>
            ))}
        </>
    );
}