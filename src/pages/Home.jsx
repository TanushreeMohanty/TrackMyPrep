import { Button, Container, Typography } from '@mui/material';

const Home = () => {
  return (
    <Container>
      <Typography variant="h3">TrackMyPrep</Typography>
      <Typography>Stay consistent. Learn smarter.</Typography>
      <Button variant="contained" href="/dashboard">Get Started</Button>
    </Container>
  );
};

export default Home;
