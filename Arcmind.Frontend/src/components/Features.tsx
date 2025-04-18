import React from 'react';
import { Box, Container, Grid, Typography, Card, CardContent } from '@mui/material';
import { styled } from '@mui/material/styles';

const FeaturesSection = styled(Box)(({ theme }) => ({
  padding: theme.spacing(12, 0),
  backgroundColor: theme.palette.background.default,
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  fontSize: '2.5rem',
  fontWeight: 700,
  marginBottom: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.primary,
}));

const SectionSubtitle = styled(Typography)(({ theme }) => ({
  fontSize: '1.2rem',
  color: theme.palette.text.secondary,
  textAlign: 'center',
  marginBottom: theme.spacing(12),
  maxWidth: '800px',
  margin: '20px auto',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  [theme.breakpoints.down('sm')]: {
    whiteSpace: 'normal',
    marginBottom: theme.spacing(8),
  },
}));

const FeatureCard = styled(Card)(({ theme }) => ({
  height: '100%',
  backgroundColor: '#F0E6D2', // Light beige background
  borderRadius: theme.shape.borderRadius * 2,
  transition: 'all 0.2s ease-in-out',
  boxShadow: `0 4px 12px ${theme.palette.primary.light}33`,
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: `0 8px 24px ${theme.palette.primary.light}66`,
  },
}));

const FeatureTitle = styled(Typography)(({ theme }) => ({
  fontSize: '1.2rem', // Smaller font
  fontWeight: 600,
  marginBottom: theme.spacing(1.5),
  color: theme.palette.text.primary,
  fontFamily: '"Poppins", sans-serif',
}));

const FeatureDescription = styled(Typography)(({ theme }) => ({
  fontSize: '0.85rem', // Smaller font
  color: theme.palette.text.secondary,
  lineHeight: 1.5,
  fontFamily: '"Poppins", sans-serif',
}));

const features = [
  {
    title: 'Personality-Based Matching',
    description: 'Our algorithm analyzes your personality traits to recommend books that resonate with your unique character.',
  },
  {
    title: 'Reading Style Analysis',
    description: 'Discover your optimal reading environment and habits based on your cognitive preferences.',
  },
  {
    title: 'Adaptive Recommendations',
    description: 'Get increasingly personalized suggestions as our system learns from your reading patterns.',
  },
  {
    title: 'Community Insights',
    description: 'Connect with readers who share your personality profile and discover their favorite books.',
  },
];

const Features: React.FC = () => {
  return (
    <FeaturesSection>
      <Container maxWidth="lg">
        <SectionTitle variant="h2">Why Choose Arcmind?</SectionTitle>
        <SectionSubtitle variant="h3">
          Experience reading in a way that's tailored to your unique personality.
        </SectionSubtitle>
        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <FeatureCard elevation={0}>
                <CardContent>
                  <FeatureTitle variant="h3">{feature.title}</FeatureTitle>
                  <FeatureDescription variant="body1">
                    {feature.description}
                  </FeatureDescription>
                </CardContent>
              </FeatureCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </FeaturesSection>
  );
};

export default Features; 