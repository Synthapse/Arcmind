import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: 'transparent',
  boxShadow: 'none',
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  zIndex: 10,
}));

const Logo = styled(Typography)(({ theme }) => ({
  fontFamily: '"Montserrat", sans-serif',
  fontWeight: 700,
  fontSize: '1.5rem',
  color: theme.palette.text.primary,
  marginRight: 'auto',
}));

const NavButton = styled(Button)(({ theme }) => ({
  color: theme.palette.text.secondary,
  marginLeft: theme.spacing(2),
  fontSize: '0.85rem',
  '&:hover': {
    color: theme.palette.text.primary,
  },
}));

const Navbar: React.FC = () => {
  return (
    <StyledAppBar position="static">
      <Toolbar>
        <Logo variant="h6">Arcmind</Logo>
        <Box sx={{ flexGrow: 1 }} />
        <NavButton>Features</NavButton>
        <NavButton>About</NavButton>
        <NavButton>Contact</NavButton>
      </Toolbar>
    </StyledAppBar>
  );
};

export default Navbar; 