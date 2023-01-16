import React from 'react'
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from "@mui/material";
import { Home, Article, Settings, Group, Storefront, Person, AccountBox, ModeNight } from '@mui/icons-material';
import Drawer from '@mui/material/Drawer';
import PropTypes from 'prop-types';
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import { Link } from 'react-router-dom';

export const DashboardSideBar = ({drawerWidth, container, mobileOpen}) => {
  const sideContent = [
    {
      title: 'Dashboard',
      path: '',
      icon: <Home sx={{color: "white"}} />
    },
    {
      title: 'Profile',
      path: '/dashboard/profile',
      icon: <AccountBox sx={{color: "white"}} />
    },
    {
      title: 'Hostel Upload',
      path: '/dashboard/hostelUpload',
      icon: <DriveFolderUploadIcon sx={{color: "white"}} />
    },
    {
      title: 'Users',
      path: '/dashboard/users',
      icon: <Group sx={{color: "white"}} />
    },
    {
      title: 'List of Hostels',
      path: '/dashboard/hostelLists',
      icon: <Article sx={{color: "white"}} />
    },
    {
      title: 'Log Out',
      path: '',
      icon: <Settings sx={{color: "white"}} />
    }
  ]

  return (
    <>
    <Box  position="fixed" sx={{marginTop: '60px',}} >
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
                    <ListItemButton component="a" href="#">
                        <ListItemIcon>
                            <ModeNight />
                        </ListItemIcon>
                        {/* onChange={e => setMode(mode === "light" ? "dark" : "light" )} */}
                        <Switch  />
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
