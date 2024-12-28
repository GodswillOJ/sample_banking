"use client";

import React from "react";
import HeaderBox from "@/components/ui/headerBox";
import Main from "@/components/ui/main";
import { Box } from "@mui/material";

const Home = () => {
  return (
    <Box
      sx={{
        position: "relative",
        display: "block",
        minHeight: "100vh", // Ensure the page spans the viewport height
        backgroundColor: "#f9f9f9",
      }}
    >
      {/* Header Section */}
      <header className="header-box" aria-label="Header Section">
        <HeaderBox
          title="Online and Mobile Security"
          subtext="We take protecting your finances seriously. All day, every day."
          backgroundImage="/icons/sec_home.png"
        />
      </header>

      {/* Main Content */}
      <main>
        <Main/>
      </main>
    </Box>
  );
};

export default Home;
