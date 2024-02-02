import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import PolicyInquiry from "./components/PolicyInquiry";
import LapsedPolicies from "./components/LapsedPolicies";
import DuePolicies from "./components/DuePolicies";
import CollectionReport from "./components/CollectionReport";
import OverDuePolicies from "./components/OverDuePolicies";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Login from "./pages/Login";


const theme = createTheme({
  palette: {
    primary: {
      main: "#7c0414", //dark red
    },
    secondary: {
      main: "#d9d9d9", // ash color
    },
    info: {
      main: "#042A2C",
    },
    success: {
      main: "#108F94",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/policyinquiry" element={<PolicyInquiry />} />
            <Route path="/lapsedpolicies" element={<LapsedPolicies />} />
            <Route path="/overduepolicies" element={<OverDuePolicies />} />
            <Route path="/duepolicies" element={<DuePolicies />} />
            <Route path="/collectionreport" element={<CollectionReport />} />
          </Routes>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
