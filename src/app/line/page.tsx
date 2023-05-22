import React from "react";
import { Box } from "../../lib/mui";
import Header from "@/components/Header";
import LineChart from "@/components/LineChart";
export default function page() {
  return (
    <Box m="20px">
      <Header title="Line Chart" subtitle="A simple Line chart" />
      <Box height="75vh">
        <LineChart isDashboard={false}/>
      </Box>
    </Box>
  );
}
