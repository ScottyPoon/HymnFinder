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
        backgroundColor: "#333333",
        minHeight: "100vh",
      }}
    >
      <form className="formContainer" onSubmit={handleSubmit}>
        <Typography variant="h2" sx={{ textAlign: "center", color: "#333333" }}>
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
      {/* Display the fetched data or loading indicator */}
      {loading ? (
        <Box
          sx={{ display: "flex", justifyContent: "center", marginTop: "20px" }}
        >
          <CircularProgress />
        </Box>
      ) : data ? (
        <Box>
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
    </div>
  );
}

export default App;
