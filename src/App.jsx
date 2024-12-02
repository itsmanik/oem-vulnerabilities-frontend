import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TopNav from "./components/Nav/TopNav/TopNav";
import Scraper from "./components/Scraper/Scraper";
import NotFound from "./components/Pages/NotFound";
import Home from "./Home";
import classes from "./App.module.css";
import ExportData from "./components/Export/ExportData";


const App = () => {
  
  return (
    <>
      <TopNav />
      <div className={classes["main-container"]}>
        <Routes>
          {/* Define Routes */}
          <Route
            path="/"
            element={
              <Home />
            }
          />
          <Route path="/scraper" element={<Scraper />} />
          <Route path="/export" element={<ExportData />} />
          {/* Fallback Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
