import React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

const MyButton = () => {
  return (
    <Box>
      <Button
        type="submit"
        variant="contained"
        color="primary"
        sx={{ marginLeft: "20px" }}
      >
        Search Hymn
      </Button>
    </Box>
  );
};

export default MyButton;
