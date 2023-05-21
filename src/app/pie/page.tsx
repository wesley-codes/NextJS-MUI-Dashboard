import React from "react";
import { Box } from "../../lib/mui";
import PieChart from "@/components/PieChart";
import Header from "@/components/Header";
export default function page() {
  return (
    <Box m="20px">
      <Header title="Pie Chart" subtitle="A simple pie chart" />
      <Box height="75vh" display="flex" justifyContent="center">
        <PieChart />
      </Box>
    </Box>
  );
}
