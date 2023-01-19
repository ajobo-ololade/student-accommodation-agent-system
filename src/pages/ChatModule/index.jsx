import { Grid } from '@mui/material'
import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Outlet } from 'react-router'
import { GetAgentAction } from '../../redux/action/chatAction'

const ChatModule = () => {
    const dispatch = useDispatch()
    useEffect(() => {
      dispatch(GetAgentAction())
    }, [])
    
    const {agents} = useSelector((state) => state.ChatReducer)
    console.log(agents);
    return (
        <div>
            <Grid container>
                <Grid item xs={2} sm={2} sx={{ display: { xs: "none", sm: 'block', lg: 'block' }, backgroundColor: 'primary.main', height: '100vh', color: 'white' }}>

                    <Grid item xs={12} sm={10}>
                        <Grid container>
                            <Grid item xs={12}>

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