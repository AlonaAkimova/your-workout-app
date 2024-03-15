import React from "react";
import MenuAppBar from "../../../components/AppBar";
import { Box } from "@mui/material";
export default function UserPage() {
  return (
    <>
      <MenuAppBar />
      <Box sx={{ display: "flex" }}>
        <p>Hello</p>
      </Box>
    </>
  );
}
