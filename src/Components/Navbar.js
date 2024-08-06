import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Drawer, List, ListItem, ListItemText, useMediaQuery, useTheme } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link as ScrollLink } from 'react-scroll';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [bgColor, setBgColor] = useState('transparent');
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md')); // Adjust 'md' to your desired breakpoint

  const handleScroll = () => {
    if (window.scrollY > 50) { // Change '50' to the scroll position where you want to change the color
      setBgColor('#0c6a94'); // Change to your desired background color
    } else {
      setBgColor('transparent');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setOpen(open);
  };

  const menuItems = [
    { text: 'About Us', to: 'about-us' },
    { text: 'Services', to: 'our-services' },
    { text: 'Help', to: 'help' },
    { text: 'Contact Us', to: 'contact-us' },
    { text: 'Career', to: 'career' },
  ];

  const drawer = (
    <div role="presentation" onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)} style={{ width: 250 }}>
      <List>
        {menuItems.map((item, index) => (
          <ListItem button key={index}>
            <ScrollLink to={item.to} smooth={true} duration={500} style={{ width: '100%', textAlign: 'center' }}>
              <ListItemText primary={item.text} />
            </ScrollLink>
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <>
      <AppBar position="fixed" style={{ backgroundColor: bgColor, transition: 'background-color 0.3s', boxShadow: 'none' }}>
        <Toolbar>
          {!isMobile && ( // Only show Typography on larger screens
            <Typography variant="h6" style={{ color: 'white', flexGrow: 1 }}>
              Dzyris Group
            </Typography>
          )}
          {isMobile ? (
            <>
              <IconButton edge="end" color="inherit" onClick={toggleDrawer(true)}>
                <MenuIcon />
              </IconButton>
              <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
                {drawer}
              </Drawer>
            </>
          ) : (
            <div className='navbut' style={{ display: 'flex', gap: 25, flexGrow: 1 }}>
              {menuItems.map((item, index) => (
                <Button color="inherit" style={{ fontFamily: 'Arial, sans-serif', fontWeight: 'bold', fontSize: '120%' }} key={index}>
                  <ScrollLink to={item.to} smooth={true} duration={500}>
                    {item.text}
                  </ScrollLink>
                </Button>
              ))}
            </div>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;

