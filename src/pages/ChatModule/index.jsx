import { Grid, Avatar } from '@mui/material'
import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Outlet } from 'react-router'
import { GetAgentAction } from '../../redux/action/chatAction';
import { deepOrange } from '@mui/material/colors';
import { useState } from 'react'

const ChatModule = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(GetAgentAction())
    }, []);
    // const {agents} = useState((state) => state.ChatReducer)

    const { agent } = useSelector((state) => state.ChatReducer)
    console.log(agent);
    return (
        <div>
            <Grid container>
                <Grid item xs={2} sm={2} sx={{ display: { xs: "none", sm: 'block', lg: 'block' }, backgroundColor: 'primary.main', height: '100vh', color: 'white' }}>

                    <Grid item xs={12} sm={10}>
                        <Grid container>
                            <Grid item xs={12} p={3}>
                            {agent.map((user) => (

                                <Avatar
                                    sx={{ bgcolor: deepOrange[500] }}
                                    alt={user.user_name}
                                    src="/"
                                />
                            ))}
                            </Grid>
                            <Grid item xs={12} sx={{}} p={2}>
                                <Outlet />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}

export default ChatModule