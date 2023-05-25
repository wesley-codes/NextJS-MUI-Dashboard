"use client";
import React from "react";
import { Box, useTheme } from "../lib/mui";
import { tokens } from "./Theme";

interface ProgressCircleProp {
  progress?: number;
  size?: number;
}

export default function ProgressCircle({
  progress = 0.75,
  size = 40,
}: ProgressCircleProp) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const angle = progress * 360;
  return (
    <Box
      sx={{
        background: `radial-gradient(${colors.primary[400]} 55%, transparent 56%),
            conic-gradient(transparent 0deg ${angle}deg, ${colors.blueAccent[500]} ${angle}deg 360deg),
            ${colors.greenAccent[500]}`,
        borderRadius: "50%",
        width: `${size}px`,
        height: `${size}px`,
      }}
    />
  );
}
