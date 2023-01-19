import axios from 'axios';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { GetAgentAction, GetMessageAction } from '../../redux/action/chatAction';
import { GetHostelAction } from '../../redux/action/hostelAction';
import { Box, Card, Link, Typography, Stack, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import Label from '../../componets/Label/Label';
import { useState } from 'react';
import one from "../../assets/citybackpackers1.jpg"
import { ChatPrompt } from './components/Chat'

const StyledProductImg = styled('img')({
  top: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  position: 'absolute',
});

const Dashboard = () => {
  const dispatch = useDispatch()
  // const { hostel } = useSelector((state) => state.HostelReducer);
  // console.log(hostel);
  const [hostels, sethostels] = useState([])
  useEffect(() => {
    const hostel = axios.get(`http://127.0.0.1:8000/api/accommodations/public`).then((res) => {
      sethostels(res.data.data.data)
      console.log(res.data.data.data);
    });
    // console.log(hostel);
  }, [])
  const [open, setopen] = useState(false);
  const [obj, setobj] = useState({})
  const handleOpen = (e) => {
    setopen(true)
    setobj(e)
    console.log(e)
  }
  const handleClose = () => {
    setopen(false)
    // console.log(e)
  }
  return (
   <div>
   <ChatPrompt open={open} onClose={handleClose} obj={obj} />
    <Box sx={{display: 'flex'}}>
      {hostels.map((host, id) => (
        <Grid key={id} item xs={12} sm={6} md={3} sx={{ padding: "1rem", backgroundColor: "white", cursor:'pointer'  }} onClick={(e) => handleOpen(host)}>
          <Card>
            <Box sx={{ pt: '100%', position: 'relative' }}>
              <Label
                variant="filled"
                color='info'

                sx={{
                  zIndex: 9,
                  top: 16,
                  right: 16,
                  position: 'absolute',
                  textTransform: 'uppercase',
                }}
              >

                ${host.amount}.00
              </Label>
              <StyledProductImg alt={'name'} src={one} />

            </Box>

            <Stack spacing={2} sx={{ p: 3 }}>
              <Link color="inherit" underline="hover">
                <Typography variant="subtitle2" noWrap>
                  {host.hostel_address}
                </Typography>
              </Link>

              <Stack direction="row" alignItems="center" justifyContent="space-between">
                {/* <ColorPreview colors={colors} /> */}
                <Typography
                  component="span"
                  variant="p"
                  sx={{
                    fontSize: "12px"
                  }}
                >
                  {host.facilities}
                </Typography>
              </Stack>
              <Stack>
              <Typography variant="p" sx={{
                  fontSize: "12px"
                }}>
                  {host.info}
                  {/* {fCurrency(price)} */}
                </Typography>
              </Stack>
            </Stack>
          </Card>
        </Grid>
      ))}
    </Box>
   </div>
  )
}

export default Dashboard
