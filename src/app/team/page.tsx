import React from "react";

import { tokens } from "@/components/Theme";
import { mockDataTeam } from "@/data/mockData";
import Header from "@/components/Header";
import { Box } from "../../lib/mui";
import {
  DataGrid,
  GridColDef,
  GridValueGetterParams,
  GridRenderCellParams,
} from "../../lib/mui-x-data-grid";
import RenderCell from "@/components/RenderCell";
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
