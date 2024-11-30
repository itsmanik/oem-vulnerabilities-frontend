import TopNav from "./components/Nav/TopNav/TopNav";
import Content from "./components/Content/Content";
import Header from "./components/Header/Header";
import classes from "./App.module.css";
import { useState, useEffect } from "react";
import axiosInstance from "./axios";

const App = () => {
  const [scrapedData, setScrapedData] = useState([]); // Original data
  const [filteredData, setFilteredData] = useState([]); // Data for "All" table

  useEffect(() => {
    // Fetch data from the API
    axiosInstance
      .get("/api/get_scraped_data") // Replace with your actual API endpoint
      .then((response) => {
        const data = response.data.data;
        setScrapedData(data); // Set original data
        setFilteredData(data); // Initialize filtered data
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  // Handle search input from SearchBox
  const handleSearch = (query) => {
    console.log("Query:", query);
    const lowerCaseQuery = query.toLowerCase();
    const filtered = scrapedData.filter((item) =>
      item.product_name.toLowerCase().includes(lowerCaseQuery)
    );
    setFilteredData(filtered);
  };

  return (
    <div>
      <TopNav />
      <div className={classes["main-container"]}>
        <Header onSearch={handleSearch} />
        <Content allData={filteredData} />
      </div>
    </div>
  );
};

export default App;
