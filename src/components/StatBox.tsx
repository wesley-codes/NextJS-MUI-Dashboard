"use client";
import React from "react";
import { Box, useTheme, Typography } from "../lib/mui";
import { tokens } from "./Theme";
import ProgressCircle from "./ProgressCircle";

interface StatBoxProps {
  title: String;
  subtitle: String;
  icon: JSX.Element;
  progress: number ;
  increase: String;
}

export default function StatBox({
  title,
  subtitle,
  icon,
  progress,
  increase,
}: StatBoxProps) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box width="100%" m="0 30px">
      <Box display="flex" justifyContent="space-between">
        <Box>
          {icon}
          <Typography variant="h4" fontWeight="bold" color={colors.grey[100]}>
            {title}{" "}
          </Typography>
        </Box>
        <Box>
          <ProgressCircle progress={progress} />
        </Box>
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Typography
            variant="h5"
            fontWeight="bold"
            color={colors.greenAccent[500]}
          >
            {subtitle}{" "}
          </Typography>
          <Typography
            variant="h5"
            fontStyle="italic"
            color={colors.greenAccent[500]}
          >
            {increase}
          </Typography>
        </Box>
      
    </Box>
  );
}
