import React from "react";

import { mockDataTeam } from "@/data/mockData";
import Header from "@/components/Header";
import { Box } from "../../lib/mui";

import DataTable from "@/components/DataTable";
import { columns } from "@/components/TableColums";
export default function page() {
  return (
    <Box m="20px">
      <Header title="Team" subtitle="Collaborate & manage with others" />

      <DataTable columns={columns} rows={mockDataTeam} />
    </Box>
  );
}
