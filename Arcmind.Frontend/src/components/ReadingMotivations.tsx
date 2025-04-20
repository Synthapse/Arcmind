import React from 'react';
import { Box, Container, Typography, Grid, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';

interface MotivationSectionProps {
  title: string;
  motivatedBy: string[];
  bookCategories: string[];
}

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  marginBottom: theme.spacing(3),
  backgroundColor: theme.palette.background.paper,
}));

const MotivationSection: React.FC<MotivationSectionProps> = ({ title, motivatedBy, bookCategories }) => (
  <StyledPaper elevation={2}>
    <Typography variant="h5" component="h3" gutterBottom sx={{ fontWeight: 'bold' }}>
      {title}
    </Typography>
    <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 'bold', mt: 2 }}>
      Motivated by:
    </Typography>
    <Box component="ul" sx={{ pl: 2, mb: 2 }}>
      {motivatedBy.map((item: string, index: number) => (
        <Typography component="li" key={index} sx={{ mb: 1 }}>
          {item}
        </Typography>
      ))}
    </Box>
    <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 'bold' }}>
      Book categories:
    </Typography>
    <Box component="ul" sx={{ pl: 2 }}>
      {bookCategories.map((category: string, index: number) => (
        <Typography component="li" key={index} sx={{ mb: 1 }}>
          {category}
        </Typography>
      ))}
    </Box>
  </StyledPaper>
);

const ReadingMotivations = () => {
  const motivations = [
    {
      title: 'Curiosity & Learning',
      motivatedBy: [
        'Intellectual curiosity',
        'A desire for personal or professional growth',
        'Staying informed'
      ],
      bookCategories: [
        'Non-fiction (History, Science, Psychology)',
        'Biographies & Memoirs',
        'Self-help / Personal development',
        'Business & Productivity',
        'Philosophy'
      ]
    },
    {
      title: 'Self-Reflection & Emotional Growth',
      motivatedBy: [
        'Healing or navigating emotions',
        'Exploring identity',
        'Seeking meaning or purpose'
      ],
      bookCategories: [
        'Memoirs / Life stories',
        'Psychology & mental health',
        'Spirituality',
        'Literary fiction',
        'Journals & guided workbooks'
      ]
    },
    {
      title: 'Escapism & Entertainment',
      motivatedBy: [
        'Relaxation or fun',
        'Stress relief',
        'Adventure or fantasy'
      ],
      bookCategories: [
        'Fiction (Fantasy, Sci-fi, Romance, Thriller, Mystery)',
        'Young Adult (YA)',
        'Graphic novels & Comics'
      ]
    },
    {
      title: 'Social Connection & Belonging',
      motivatedBy: [
        'Book clubs or discussions',
        'Cultural relevance (e.g. trending books)',
        'Understanding different perspectives'
      ],
      bookCategories: [
        'Contemporary fiction',
        'Memoirs',
        'Social issues / current events',
        'Popular bestsellers'
      ]
    },
    {
      title: 'Practical Needs',
      motivatedBy: [
        'Solving a problem',
        'Gaining a skill',
        'Planning or preparing for something'
      ],
      bookCategories: [
        'How-to guides',
        'Cookbooks',
        'Travel books',
        'Parenting / Health / Fitness',
        'Technical / Professional manuals'
      ]
    }
  ];

  return (
    <Box sx={{ py: 8, backgroundColor: 'background.default' }}>
      <Container maxWidth="lg">
        <Typography variant="h3" component="h2" align="center" gutterBottom sx={{ mb: 6, fontWeight: 'bold' }}>
          Reading Motivations
        </Typography>
        <Grid container spacing={4}>
          {motivations.map((motivation, index) => (
            <Grid item xs={12} key={index}>
              <MotivationSection {...motivation} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default ReadingMotivations; 