"use client"
import { GridColDef,GridRenderCellParams } from "../lib/mui-x-data-grid";
import RenderCell from "./RenderCell";

export const columns: GridColDef[] = [
    //mock data co;umn for teams page
    {
      field: "id",
      headerName: "ID",
    },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "phone",
      headerName: "Phone",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },

    {
      field: "access",
      headerName: "Access Level",
      flex: 1,
      renderCell: (params: GridRenderCellParams<String>) => (
        <RenderCell access={params.value} />
      ),
    },
  ];
