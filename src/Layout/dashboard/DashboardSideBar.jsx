import React from 'react'
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from "@mui/material";
import { Home, Article, Settings, Group, Storefront, Person, AccountBox, ModeNight } from '@mui/icons-material';
import MailIcon from '@mui/icons-material/Mail';
import Drawer from '@mui/material/Drawer';
import PropTypes from 'prop-types';
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { LogOutAction } from '../../redux/action/authActions';

export const DashboardSideBar = ({ drawerWidth, container, mobileOpen }) => {
  const sideContent = [
    {
      title: 'Dashboard',
      path: '/dashboard/dash',
      icon: <Home sx={{ color: "white" }} />
    },
    {
      title: 'Profile',
      path: '/dashboard/profile',
      icon: <AccountBox sx={{ color: "white" }} />
    },
    {
      title: 'Hostel Upload',
      path: '/dashboard/hostelUpload',
      icon: <DriveFolderUploadIcon sx={{ color: "white" }} />
    },
    {
      title: 'Inbox',
      path: '/dashboard/inbox',
      icon: <MailIcon  sx={{ color: "white" }} />
    },
    {
      title: 'List of Hostels',
      path: '/dashboard/hostelLists',
      icon: <Article sx={{ color: "white" }} />
    },
    // {
    //   title: 'Log Out',
    //   action: '',
    //   icon: <Settings sx={{ color: "white" }} />
    // }
  ]
  const dispatch = useDispatch()
  const logOut = async () => {
    const data = await dispatch(LogOutAction());
    console.log(data);
  }

  return (
    <>
      <Box position="fixed" sx={{ marginTop: '60px', }} >
        {sideContent.map(({ title, path, icon }) => (
          <List>
            <ListItem disablePadding>
              <ListItemButton component={Link} to={path}>
                <ListItemIcon>
                  {icon}
                </ListItemIcon>
                <ListItemText primary={title} />
              </ListItemButton>
            </ListItem>
          </List>
        ))}
        <List>
          <ListItem disablePadding>
            <ListItemButton onClick={ logOut }>
              <ListItemIcon>
                <Settings sx={{ color: "white" }} />
              </ListItemIcon>
              <ListItemText primary='Log Out' />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </>
  )
};
DashboardSideBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};
