import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "@/pages/landingPage";
import TradingPage from "@/pages/tradingPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/trading" element={<TradingPage />} />
      </Routes>
    </Router>
  );
}

export default App;
