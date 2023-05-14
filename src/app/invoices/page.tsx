import React from "react";

import { mockDataInvoices } from "@/data/mockData";
import Header from "@/components/Header";
import { Box, Typography } from "../../lib/mui";

import DataTable from "@/components/DataTable";
import { columns, invoiceColumn } from "@/components/TableColums";
export default function page() {
  return (
    <Box m="20px">
      <Header
        title="Invoice"
        subtitle="Manage payments with the invoice table"
      />

      <DataTable columns={invoiceColumn} rows={mockDataInvoices} invoice />
    </Box>
  );
}
