import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TopNav from "./components/Nav/TopNav/TopNav";
import Scraper from "./components/Scraper/Scraper";
import NotFound from "./components/Pages/NotFound";
import Home from "./Home";
import classes from "./App.module.css";
import ExportData from "./components/Export/ExportData";
import Tutorials from "./components/Tutorials/Tutorials";
import VideoPlayerPage from "./components/Tutorials/VideoPlayerPage";
import TutorialsPage from "./components/Tutorials/TutorialsPage";
import KnowledgeBasePage from "./components/Tutorials/KnowledgeBasePage";


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
          {/* <Route path="/tutorial" element={<Tutorials />} /> */}
          <Route path="/tutorial">
            <Route path="/tutorial" element={<Tutorials />} />
            <Route path="/tutorial/:videoName" element={<VideoPlayerPage />} />
          </Route>

          <Route path="/tutorials" element={<TutorialsPage />} />
          <Route path="/knowledge-base" element={<KnowledgeBasePage />} />

          {/* Fallback Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
