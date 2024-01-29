import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import PolicyInquiry from "./components/PolicyInquiry";
import LapsedPolicies from "./components/LapsedPolicies";
import DuePolicies from "./components/DuePolicies";
import CollectionReport from "./components/CollectionReport";
import OverDuePolicies from "./components/OverDuePolicies";



function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/dashboard" element={<Dashboard/>}></Route>
          <Route path="/policyinquiry" element={<PolicyInquiry/>}></Route>
          <Route path="/lapsedpolicies" element={<LapsedPolicies/>}></Route>
          <Route path="/overduepolicies" element={<OverDuePolicies/>}></Route>
          <Route path="/duepolicies" element={<DuePolicies/>}></Route>
          <Route path="/collectionreport" element={<CollectionReport/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
