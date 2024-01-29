import React, { useState } from "react";
import Button from '@mui/material/Button';
import { ThemeProvider, createTheme } from '@mui/material/styles';


const theme = createTheme({
  palette: {
    primary: {
      main: '#7c0414'
    },
    secondary: {
      main: '#0C6D71'
    },
    info: {
      main: '#042A2C'
    },
    success: {
      main: '#108F94'
    }

  }
})
function App() {
  return (
    <div>
       <ThemeProvider theme={theme}>
      <h1 color="primary">Hello</h1>
      <Button variant="contained">Contained</Button>
      </ThemeProvider>
    </div>
  );
}
export default App;
