import React from "react";
import { Input, Box } from "@mui/material";
const MyInput = ({ handleChange }) => {
  return (
    <Box>
      <Input name="myInput" placeholder="Psalm 136" onChange={handleChange} />
    </Box>
  );
};

export default MyInput;
