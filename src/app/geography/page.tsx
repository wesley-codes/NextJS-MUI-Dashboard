import React from "react";
import { Box } from "../../lib/mui";

import Header from "@/components/Header";
import GeoChart from "@/components/GeoChart";

export default function page() {
  return (
    <Box m="20px">
      <Header title="Geography Chart" subtitle="A simple Geography chart" />
      <Box height="75vh" border="1px solid grey" borderRadius="4px">
        <GeoChart isDashboard={false} />
      </Box>
    </Box>
  );
}
