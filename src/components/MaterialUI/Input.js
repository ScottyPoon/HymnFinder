import React from "react";
import Input from "@mui/material/Input";
import Box from "@mui/material/Box";

const MyInput = ({ handleChange }) => {
  return (
    <Box>
      <Input
        name="myInput"
        placeholder="Psalm 136"
        onChange={handleChange}
        sx={{ width: "400px" }} // Adjust the width as needed
      />
    </Box>
  );
};

export default MyInput;
