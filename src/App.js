import React, { useState } from "react";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Login from'./pages/Login/Login';


const theme = createTheme({
  palette: {
    primary: {
      main: '#7c0414' //dark red
    },
    secondary: {
      main: '#d9d9d9' // ash color
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
        <Login></Login>
        {/* <LoginPage></LoginPage> */}
      
      </ThemeProvider>
    </div>
  );
}
export default App;
