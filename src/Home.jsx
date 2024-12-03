import React from 'react';
import classes from "./App.module.css";
import Header from "./components/Header/Header";
import Content from "./components/Content/Content";

import axiosInstance from './axios';

import { useState, useEffect } from "react";

export default function Home() {
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
      <div className={classes["main-container"]}>
        <Header onSearch={handleSearch} />
        <Content allData={filteredData} />
      </div>
    </div>
  )
}
