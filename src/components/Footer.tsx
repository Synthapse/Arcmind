import React from 'react';
import { Box, Container, Typography, Link, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';

const FooterContainer = styled(Box)(({ theme }) => ({
  backgroundColor: '#2C1810', // Dark brown background
  color: '#F5F5DC', // Light beige text
  padding: theme.spacing(6, 0),
  marginTop: 'auto',
}));

const FooterContent = styled(Container)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  [theme.breakpoints.up('md')]: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
}));

const FooterLogo = styled(Typography)(({ theme }) => ({
  fontFamily: '"Montserrat", sans-serif',
  fontWeight: 700,
  fontSize: '1.5rem',
  marginBottom: theme.spacing(2),
  [theme.breakpoints.up('md')]: {
    marginBottom: 0,
  },
}));

const FooterLinks = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  [theme.breakpoints.up('md')]: {
    flexDirection: 'row',
  },
}));

const FooterLink = styled(Link)(({ theme }) => ({
  color: '#F5F5DC', // Light beige text
  margin: theme.spacing(1),
  textDecoration: 'none',
  '&:hover': {
    color: '#D2B48C', // Light beige hover
    textDecoration: 'underline',
  },
}));

const Copyright = styled(Typography)(({ theme }) => ({
  marginTop: theme.spacing(4),
  textAlign: 'center',
  fontSize: '0.8rem',
  color: '#E6D5B8', // Lighter beige for copyright
}));

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <FooterContent maxWidth="lg">
        <FooterLogo variant="h6">Arcmind</FooterLogo>
        <FooterLinks>
          <FooterLink href="#">Features</FooterLink>
          <FooterLink href="#">About</FooterLink>
          <FooterLink href="#">Contact</FooterLink>
          <FooterLink href="#">Privacy Policy</FooterLink>
          <FooterLink href="#">Terms of Service</FooterLink>
        </FooterLinks>
      </FooterContent>
      <Container maxWidth="lg">
        <Copyright variant="body2">
          © {currentYear} Arcmind. All rights reserved.
        </Copyright>
      </Container>
    </FooterContainer>
  );
};

export default Footer; 