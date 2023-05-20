import React from "react";

import { mockDataContacts } from "@/data/mockData";
import Header from "@/components/Header";
import { Box } from "../../lib/mui";

import DataTable from "@/components/DataTable";
import { columns, contactColumn } from "@/components/TableColums";
export default function page() {
  return (
    <Box m="20px">
      <Header title="Contacts" subtitle="Meet up with contacts" />
      <DataTable columns={contactColumn} rows={mockDataContacts} contacts />
    </Box>
  );
}
