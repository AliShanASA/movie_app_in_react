import { React, useEffect } from "react";
import "./App.css";
import SearchIcon from "./search.svg";
// API KEY = b81bc732
const API_URL = "http://www.omdbapi.com?apikey=b81bc732";

const App = () => {
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json(); // Call json() as a function
    console.log(data.Search);
  };

  useEffect(() => {
    searchMovies("Superman");
  }, []);

  return (
    <div className="app">
      <h1>Movie Land</h1>

      <div className="search">
        <input placeholder="Search For Movies" />
      </div>
    </div>
  );
};

export default App;
