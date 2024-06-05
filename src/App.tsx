import { Box } from "@mui/material";

import { Router } from "Router";

// Components
import Footer from "Components/Footer";
import NavBar from "Components/NavBar";

function App() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        margin: "0 auto",
        width: "100vw",
        minHeight: "100vh",
        pt: 2,
      }}
    >
      <NavBar />
      <Box sx={{ flex: 1, paddingTop: "20px", paddingBottom: "20px" }}>
        <Router />
      </Box>
      <Footer />
    </Box>
  );
}

export default App;
