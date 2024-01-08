import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import DeleteIcon from '@mui/icons-material/Delete';
import HomeIcon from '@mui/icons-material/Home';
import LogoutIcon from '@mui/icons-material/Logout';
import Profile from '@mui/icons-material/AccountCircle';

export default function TemporaryDrawer({state,setState,toggleDrawer}) {
  

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>

      {['Home'].map((text) => (
      <ListItem key={text} disablePadding>
            <ListItemButton href={`/${text.toLowerCase()}`}>
              <ListItemIcon>
               <HomeIcon sx={{ color: '#fff' }} />
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
      </ListItem>     
        ))}
      </List>

      <Divider />

      <List>
      {['Logout'].map((text) => (
         <ListItem key={text} disablePadding>
            <ListItemButton href={`/${text.toLowerCase()}`}>
              <ListItemIcon>
              <LogoutIcon sx={{ color: '#fff' }} />
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
            </ListItem>
        ))}
      </List>

      <Divider />

      <List>
      {['Profile'].map((text) => (
         <ListItem key={text} disablePadding>
            <ListItemButton href={`/${text.toLowerCase()}`}>
              <ListItemIcon>
              <Profile sx={{ color: '#fff' }} />
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
            </ListItem>
        ))}
      </List>
    
    </Box>
  );

  return (
    <div>
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            PaperProps={{
                sx: {
                  backgroundColor: "#566573",
                  color: "#fff"
                }
              }}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}