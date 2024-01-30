import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import PolicyInquiry from "./components/PolicyInquiry";
import LapsedPolicies from "./components/LapsedPolicies";
import DuePolicies from "./components/DuePolicies";
import CollectionReport from "./components/CollectionReport";
import OverDuePolicies from "./components/OverDuePolicies";



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

       <BrowserRouter>
         <Routes>
         <Route path='/' exact element={<Login/> } />
           <Route path="/dashboard" element={<Dashboard/>}></Route>

          <Route path="/policyinquiry" element={<PolicyInquiry/>}></Route>
          <Route path="/lapsedpolicies" element={<LapsedPolicies/>}></Route>
          <Route path="/overduepolicies" element={<OverDuePolicies/>}></Route>
           <Route path="/duepolicies" element={<DuePolicies/>}></Route>
          <Route path="/collectionreport" element={<CollectionReport/>}></Route>
         </Routes>
      </BrowserRouter>
</ThemeProvider>
</div>
     
  );
}
export default App;
