"use client";
import { GridColDef, GridRenderCellParams } from "../lib/mui-x-data-grid";
import RenderCell from "./RenderCell";
import { Typography } from "../lib/mui";
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

export const contactColumn: GridColDef[] = [
  {
    field: "id",
    headerName: "ID",
    flex: 0.5,
  },
   {
    field: "registrarId",
    headerName: "RegistrarID",
    flex: 0.5,
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
    field:"address",
    headerName:"Address",
    flex:1
  },
  {
    field:"city",
    headerName:"City",
    flex:1
  },

    {
    field:"zipCode",
    headerName:"ZipCode",
    flex:1
  },

];



export const invoiceColumn: GridColDef[] = [
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
      field: "cost",
      headerName: "Cost",
      flex: 1,
      renderCell: (params: GridRenderCellParams<Number>) => (
        <Typography >{params.value}</Typography>
      ),
    },
  
    {
      field: "date",
      headerName: "Date",
      flex: 1,
    },
  ];
  