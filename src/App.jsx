import AppBar from "./AppBar";
import { Box } from "@mui/material";
import './App.css'
import { Outlet } from "react-router-dom";
import LoginPage from "./LoginPage";

export default function App() {
  return (

    <Box>
      <AppBar />
      <div>
        <Outlet />
      </div>
    </Box>
  )
}