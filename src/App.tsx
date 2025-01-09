import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "@/pages/landingPage";
import TradingPage from "@/pages/tradingPage";
import { ChartPage } from "./components/trading-portal/chartPage";
import ThemeInitializer from "./components/ThemeInitializer";

function App() {
  return (
    <>
    <ThemeInitializer />
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/trading" element={<TradingPage />} />
        <Route path="/chart/:symbol" element={<ChartPage />} />
      </Routes>
    </Router></>
   
  );
}

export default App;
