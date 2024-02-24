import "./App.css";
import React, { useState } from "react";
import MyButton from "./components/MaterialUI/Button";
import MyInput from "./components/MaterialUI/Input";
import OutlinedCard from "./components/MaterialUI/Card";
import { CircularProgress, Box, Typography } from "@mui/material";
import { styles } from "./styles/Styles";

function App() {
  const [input, setInput] = useState("");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  function handleChange(e) {
    setInput(e.target.value);
  }

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://hymnary.org/api/scripture?reference=${input}`
      );
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("You've entered:", input);
    await fetchData();
  };

  return (
    <div
      style={{
        display: "flex",

        flexDirection: "column",
        alignItems: "center",
        //backgroundColor: "#333333",

        backgroundColor: "#f0f0f0",
        minHeight: "100vh",
      }}
    >
      <Box sx={styles.container}>
        <Typography variant="h2" sx={{ color: "#333333" }}>
          Hymn Finder
        </Typography>
        <Typography>By Scotty Poon</Typography>
        <Typography variant="h5" sx={{ textAlign: "center" }}>
          Enter Scripture Passage
        </Typography>
        <form onSubmit={handleSubmit}>
          <Box sx={styles.formContainer}>
            <MyInput handleChange={handleChange} />
            <MyButton />
          </Box>
        </form>
        {/* Display the fetched data or loading indicator */}
        {loading ? (
          <Box
            className="loadingContainer"
            sx={{
              display: "flex",
              justifyContent: "center",
              marginTop: "5vh",
            }}
          >
            <CircularProgress />
          </Box>
        ) : data ? (
          <Box className="outerCardBoxContainer" sx={styles.outerCardContainer}>
            {/* Render the fetched data */}
            <Box className="cardBoxContainer" sx={styles.cardContainer}>
              {Object.keys(data).map((key) => (
                <OutlinedCard
                  key={key}
                  title={data[key].title}
                  author={data[key].author ? data[key].author : "No Author"}
                  scripture_reference={data[key]["scripture references"]}
                  link={data[key]["text link"]}
                />
              ))}
            </Box>
          </Box>
        ) : null}
      </Box>
    </div>
  );
}

export default App;
