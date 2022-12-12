import React from 'react'
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from "@mui/material";
import { Home, Article, Settings, Group, Storefront, Person, AccountBox, ModeNight } from '@mui/icons-material';
import Drawer from '@mui/material/Drawer';
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';

export const DashboardSideBar = ({drawerWidth, container, mobileOpen,}) => {
  const sideContent = [
    {
      title: 'Dashboard',
      path: '',
      icon: <Home />
    },
    {
      title: 'Profile',
      path: '',
      icon: <AccountBox />
    },
    {
      title: 'Hostel Upload',
      path: '/dashboard/hostelUpload',
      icon: <DriveFolderUploadIcon />
    },
    {
      title: 'Users',
      path: '',
      icon: <Group />
    },
    {
      title: 'List of Hostels',
      path: '',
      icon: <Article />
    },
    {
      title: 'Log Out',
      path: '',
      icon: <Settings />
    }
  ]
  const drawer = (
    <Box position="fixed" sx={{marginTop: '60px', color: 'primary.mai', }} >
            {sideContent.map(({title, path, icon})=>(
              <List>
                <ListItem disablePadding>
                    <ListItemButton component="a" href={path}>
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
  )
  return (
    <>
       <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          // onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
</>
  )
};
