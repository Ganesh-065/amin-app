import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const LoadingScreen = () => {
  return (
    <div>
      <Box sx={{ display: "flex" }}>
        <CircularProgress />
      </Box>
    </div>
  );
};

export default LoadingScreen;
