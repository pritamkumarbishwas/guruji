import React from 'react';
import { Form } from './containers';
import { HashRouter } from 'react-router-dom';
import { Container, Box } from '@mui/material'; 
import './App.css';

function App() {
  return (
    <HashRouter>
      <Container
        maxWidth="lg" 
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '100vh',
          padding: '2rem', 
          fontFamily: 'Ubuntu, sans-serif', 
        }}
      >
        <Box sx={{ flexGrow: 1 }}>
          <Form />
        </Box>
      </Container>
    </HashRouter>
  );
}

export default App;
