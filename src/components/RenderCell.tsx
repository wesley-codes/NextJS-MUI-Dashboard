"use client";
import React from "react";
import { Box, useTheme, Typography } from "../lib/mui";
import { tokens } from "./Theme";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";

interface RenderCellProp {
  access: String;
}
export default function RenderCell({ access }: RenderCellProp) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box
      sx={{
        width: "60%",
        m: "0 auto",
        p: "5px",
        display: "flex",
        justifyContent: "center",
        backgroundColor:
          access === "admin"
            ? colors.greenAccent[600]
            : colors.greenAccent[100],
      }}
      borderRadius="4px"
    >
      {access === "admin" && <AdminPanelSettingsOutlinedIcon />}
      {access === "manager" && <SecurityOutlinedIcon />}
      {access === "user" && <LockOpenOutlinedIcon />}
      <Typography variant="h6" color={colors.grey[100]} sx={{ ml: "5px" }}>
        {access}
      </Typography>
    </Box>
  );
}
