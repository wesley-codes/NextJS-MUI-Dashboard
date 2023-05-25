"use client"
import React from "react";
import { Box, useTheme} from "../../lib/mui";

import Header from "@/components/Header";
import GeoChart from "@/components/GeoChart";
import { tokens } from "@/components/Theme";


export default function page() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Header title="Geography Chart" subtitle="A simple Geography chart" />
      <Box height="75vh" border={`1px solid ${colors.grey[100]}` } borderRadius="4px">
        <GeoChart isDashboard={false} />
      </Box>
    </Box>
  );
}
