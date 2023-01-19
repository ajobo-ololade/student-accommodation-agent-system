import { Grid, Avatar, Typography, Box } from '@mui/material'
import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Outlet } from 'react-router'
import { GetAgentAction, GetMessageAction } from '../../redux/action/chatAction';
import { deepOrange } from '@mui/material/colors';
import { useState } from 'react'
import { ChatBox } from './components/ChatBox'

const ChatModule = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(GetAgentAction())
        dispatch(GetMessageAction())
    }, []);
    // const {agents} = useState((state) => state.ChatReducer)

    const { agent, chats } = useSelector((state) => state.ChatReducer)
    console.log(chats);
    return (
        <div>
            <Grid container>
                <Grid item xs={2} sm={2} sx={{ display: { xs: "none", sm: 'block', lg: 'block' }, backgroundColor: 'primary.main', height: '100vh', color: 'white' }}>

                    <Grid item xs={12} p={3}>
                        {agent.map(({ user_name }) => (

                            <Box sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }} gap={2}>
                                <Avatar
                                    sx={{ bgcolor: deepOrange[500], my: 2 }}
                                    alt={user_name.toUpperCase()}
                                    src="/"
                                />
                                <Typography>{user_name}</Typography>
                            </Box>
                        ))}
                    </Grid>
                </Grid>
                <Grid item xs={10} sx={{ backgroundColor: 'black' }} p={2}>
                    <ChatBox chats={chats} />
                </Grid>
            </Grid>
        </div>
    )
}

export default ChatModule