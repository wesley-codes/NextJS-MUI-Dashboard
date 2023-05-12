"use client";
import React from "react";
import { Box, useTheme } from "../lib/mui";
import {
  DataGrid,
  GridColDef,
  GridValueGetterParams,
  GridRenderCellParams,
} from "../lib/mui-x-data-grid";
import { MockDataTeamType } from "@/types/_types";
import { tokens } from "./Theme";

interface DataTableProps {
  rows: MockDataTeamType[];
  columns: GridColDef[];
}

export default function DataTable({ rows, columns }: DataTableProps) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box
      m="40px 0 0 0"
      height="75vh"
      sx={{
        "& .MuiDataGrid-root": {
          border: "none",
        },
        "& .MuiDataGrid-cell": {
          borderBottom: "none",
        },
        "& .name-column--cell": {
          color: colors.greenAccent[300],
        },
        "& .MuiDataGrid-columnHeaders": {
          backgroundColor: colors.blueAccent[700],
        },
        "& .MuiDataGrid-virtualScroller": {
          backgroundColor: colors.primary[400],
        },
        "& .MuiDataGrid-footerContainer": {
          borderTop: "none",
          backgroundColor: colors.blueAccent[700],
        },
      }}
    >
      <DataGrid rows={rows} columns={columns} />
    </Box>
  );
}
