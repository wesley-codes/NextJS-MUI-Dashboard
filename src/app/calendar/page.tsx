import CalenderItem from "@/components/CalenderItem";
import React from "react";
import { Box } from "../../lib/mui";
import Header from "@/components/Header";
export default function page() {
  return (
    <Box m="20px">
      <Header title="Calendar" subtitle="Schedule your events" />

      <CalenderItem />
    </Box>
  );
}


