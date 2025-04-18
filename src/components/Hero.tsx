import React from 'react';
import { Box, Typography, Button, Container, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import heroBg from '../assets/hero-bg.jpg';

const HeroSection = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  width: '100%',
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  overflow: 'hidden',
}));

const HeroContent = styled(Container)(({ theme }) => ({
  position: 'relative',
  zIndex: 2,
  padding: theme.spacing(8, 0),
}));

const HeroText = styled(Box)(({ theme }) => ({
  maxWidth: '600px',
}));

const HeroTitle = styled(Typography)(({ theme }) => ({
  fontSize: '2.5rem',
  fontWeight: 700,
  marginBottom: theme.spacing(2),
  color: theme.palette.text.primary,
  [theme.breakpoints.down('sm')]: {
    fontSize: '2rem',
  },
}));

const HeroSubtitle = styled(Typography)(({ theme }) => ({
  fontSize: '1.3rem',
  marginBottom: theme.spacing(4),
  color: theme.palette.text.secondary,
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.1rem',
  },
}));

const HeroClaim = styled(Typography)(({ theme }) => ({
  fontSize: '1rem',
  marginBottom: theme.spacing(4),
  color: theme.palette.text.secondary,
  fontStyle: 'italic',
  [theme.breakpoints.down('sm')]: {
    fontSize: '0.9rem',
  },
}));

const CTAButton = styled(Button)(({ theme }) => ({
  padding: theme.spacing(1.2, 3),
  fontSize: '0.9rem',
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  '&:hover': {
    backgroundColor: theme.palette.primary.dark,
  },
}));

const HeroImage = styled(Box)(({ theme }) => ({
  height: '100vh',
  width: '100%',
  position: 'relative',
  backgroundImage: `url(${heroBg})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    zIndex: 1,
  },
  [theme.breakpoints.down('md')]: {
    height: '50vh',
    order: -1,
  },
}));

const Hero: React.FC = () => {
  const handleCreateProfile = () => {
    window.open('https://form.typeform.com/to/zufeXJvl', '_blank');
  };

  return (
    <HeroSection>
      <Container maxWidth="xl" sx={{ display: 'flex', alignItems: 'center' }}>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <HeroContent>
              <HeroText>
                <HeroTitle variant="h1">Discover Your Reading DNA</HeroTitle>
                <HeroSubtitle variant="h2">Personalized reading recommendations based on your unique personality profile.</HeroSubtitle>
                <HeroClaim variant="body1">
                  "Arcmind's personality-based recommendations have completely transformed my reading journey. I'm discovering books I never would have found on my own."
                </HeroClaim>
                <CTAButton variant="contained" size="large" onClick={handleCreateProfile}>
                  Create Your Profile
                </CTAButton>
              </HeroText>
            </HeroContent>
          </Grid>
          <Grid item xs={12} md={6}>
            <HeroImage />
          </Grid>
        </Grid>
      </Container>
    </HeroSection>
  );
};

export default Hero; 