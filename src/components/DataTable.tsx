"use client";
import React from "react";
import { Box, useTheme } from "../lib/mui";
import {
  DataGrid,
  GridColDef,
  GridValueGetterParams,
  GridRenderCellParams,
  GridToolbar,
} from "../lib/mui-x-data-grid";
import { MockDataContactsType, MockDataInvoicesType, MockDataTeamType } from "@/types/_types";
import { tokens } from "./Theme";

interface DataTableProps {
  rows: MockDataTeamType[] | MockDataContactsType[] | MockDataInvoicesType[];
  columns: GridColDef[];
  contacts?: Boolean;
}

export default function DataTable({ rows, columns, contacts }: DataTableProps) {
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
          borderBottom: "none",

          backgroundColor: colors.blueAccent[700],
        },
        "& .MuiDataGrid-virtualScroller": {
          backgroundColor: colors.primary[400],
        },
        "& .MuiDataGrid-footerContainer": {
          borderTop: "none",
          backgroundColor: colors.blueAccent[700],
        },
        "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
          color: `${colors.grey[100]} !important`,
        },
      }}
    >
      <DataGrid
        rows={rows}
        columns={columns}
        slots={{ toolbar: contacts && GridToolbar }}
      />
    </Box>
  );
}
