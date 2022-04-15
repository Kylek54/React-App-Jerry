import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { QuizLayout } from './features/QuizPage.js';



export default function App() {
  return (
    <Container>
      <div className="body">
        <Typography variant="h4" component="h1" gutterBottom>
          Finger Spelling Demo
        </Typography>
        <QuizLayout/>
      </div>
    </Container>
  );
}
