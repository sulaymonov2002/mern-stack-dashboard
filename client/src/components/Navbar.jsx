import React, { useState } from "react";
import { setMode } from "state";
import { useDispatch } from "react-redux";
import {
  LightModeOutlined,
  DarkModeOutlined,
  Menu as MenuIcon,
  Search,
  SettingsOutlined,
  ArrowDropDownOutlined,
} from "@mui/icons-material";
import { AppBar, Toolbar, useTheme } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import profileImage from "assets/profile.jpeg";

const Navbar = () => {
  const dispatch = useDispatch();
  const theme = useTheme();
  return (
    <AppBar sx={{ position: "static", background: "none", boxShadow: "none" }}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        {/* LEFT SIDE */}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
