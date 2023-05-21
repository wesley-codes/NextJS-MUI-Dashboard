import BarChart from "@/components/BarChart";
import Header from "@/components/Header";
import React from "react";
import { Box } from "../../lib/mui";
export default function page() {
  return (
    <Box m="20px">
      <Header title="Bar Chart" subtitle="A simple Bar Chart" />
      <Box height="75vh">
        <BarChart isDashboard={false} />
      </Box>
    </Box>
  );
}
