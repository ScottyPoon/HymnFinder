import "./App.css";
import SearchBar from "./components/SearchBar";
import MakeRequest from "./HymnService";
import HymnList from "./components/HymnList";
import React, { useState } from "react";
import MyButton from "./components/MaterialUI/Button";
import MyInput from "./components/MaterialUI/Input";
import OutlinedCard from "./components/MaterialUI/Card";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function App() {
  const [input, setInput] = useState("");
  const [data, setData] = useState(null);

  function handleChange(e) {
    setInput(e.target.value);
  }

  const fetchData = () => {
    const apiUrl = `https://hymnary.org/api/scripture?reference=${input}`;
    console.log("API URL:", apiUrl);
    fetch(apiUrl)
      .then((response) => response.json())
      .then((responseData) => {
        setData(responseData);
        console.log("Data fetched successfully:", responseData);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  function handleSubmit(e) {
    e.preventDefault();
    console.log("You've entered:", input);
    fetchData();
  }

  return (
    <div>
      <form className="formContainer" onSubmit={handleSubmit}>
        <Typography variant="h2" sx={{ textAlign: "center" }}>
          Hymn Finder
        </Typography>
        <Typography sx={{ textAlign: "center" }}>By Scotty Poon</Typography>
        <Typography variant="h5" sx={{ textAlign: "center" }}>
          Enter Scripture Passage
        </Typography>
        <Box
          sx={{ display: "flex", justifyContent: "center", marginLeft: "20px" }}
        >
          <MyInput handleChange={handleChange} />
          <MyButton />
        </Box>
      </form>
      {/* Conditional rendering block for data */}
      {data &&
        Object.keys(data).map((key) => (
          <OutlinedCard
            key={key}
            title={data[key].title}
            author={data[key].author ? data[key].author : "No Author"}
            scripture_reference={data[key]["scripture references"]}
            link={data[key]["text link"]}
          />
        ))}
    </div>
  );
}

export default App;
