import { useState, useEffect } from "react";
import Timer from "./Timer";
import CircularProgress from "./ProgressBar";

const ScrapingPage = () => {
  const [websites, setWebsites] = useState([
    { name: "example.com", progress: 0 },
    { name: "another.com", progress: 0 },
    { name: "webscraper.net", progress: 0 },
    { name: "datasite.io", progress: 0 },
  ]);
  const [scrapedWebsites, setScrapedWebsites] = useState([]);
  const [nextScrapeTime, setNextScrapeTime] = useState(Date.now() + 3600000);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < websites.length) {
      scrapeWebsite(currentIndex);
    }
  }, [currentIndex]);

  const scrapeWebsite = (index) => {
    let interval;
    setWebsites((prev) => {
      const updated = [...prev];
      updated[index].progress = 0; // Ensure progress starts at 0
      return updated;
    });
  
    interval = setInterval(() => {
      setWebsites((prev) => {
        const updated = [...prev];
        const current = updated[index];
  
        if (current.progress < 100) {
          current.progress += Math.floor(Math.random() * 15) + 5; // Increment progress
          return updated;
        } else {
          clearInterval(interval);
  
          // Add to "Already Scraped" only if not already present
          setScrapedWebsites((prev) => {
            if (!prev.includes(current.name)) {
              return [...prev, current.name];
            }
            return prev;
          });
  
          // Remove from current list
          updated.splice(index, 1);
  
          // Set the next website to scrape
          setCurrentIndex(index >= updated.length ? 0 : index);
  
          return updated;
        }
      });
    }, 1000);
  };
  

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-gray-100 py-10 px-6">
      <Timer nextScrapeTime={nextScrapeTime} />
      <div className="max-w-5xl mx-auto space-y-10">
        {/* Current Scraping Section */}
        <div className="bg-white shadow-lg rounded-xl p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Current Scraping Progress</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {websites.map((site, index) => (
              <CircularProgress
                key={site.name}
                website={site.name}
                progress={site.progress}
                isScraping={index === currentIndex}
              />
            ))}
          </div>
        </div>

        {/* Scraped Websites Section */}
        <div className="bg-white shadow-lg rounded-xl p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Already Scraped Websites</h2>
          <div className="flex flex-wrap gap-4">
            {scrapedWebsites.map((site, index) => (
              <div
                key={index}
                className="bg-green-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-green-600 transform transition hover:scale-105"
              >
                {site}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScrapingPage;
